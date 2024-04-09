<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

include "./cone.php"; // Ensure this path is correct
require './create_jwt.php'; // Include the JWT creation script

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['userId'], $_POST['otp'], $_POST['usertype'])) {
    $userId = $_POST['userId'];
    $otp = $_POST['otp'];
    $usertype = $_POST['usertype'];

    // Determine the correct connection and table name based on usertype
    if ($usertype == 'participant') {
        $conn = $conn1;
        $tableName = 'parti';
    } elseif ($usertype == 'researcher') {
        $conn = $conn2;
        $tableName = 'resead';
    } else {
        echo json_encode(['error' => 'Invalid user type']);
        exit;
    }

    if (!$conn || !$tableName) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid user type."]);
        exit;
    }

    // Fetch the user's email from the correct table
    $emailStmt = $conn->prepare("SELECT email FROM `$tableName` WHERE id = ? LIMIT 1");
    $emailStmt->bind_param("i", $userId);
    $emailStmt->execute();
    $emailResult = $emailStmt->get_result();
    $emailRow = $emailResult->fetch_assoc();
    $email = $emailRow['email'] ?? null;

    if (!$email) {
        // Handle case where no email/user found
        http_response_code(404);
        echo json_encode(["error" => "User not found."]);
        exit;
    }

    // Then, proceed to fetch and verify the OTP as before
    $stmt = $conn->prepare("SELECT otp, expires_at FROM user_otp WHERE user_id = ? AND expires_at > NOW() ORDER BY expires_at DESC LIMIT 1");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if ($otp == $row['otp'] && new DateTime() < new DateTime($row['expires_at'])) {
            // OTP verification success
    
            // Invalidate or delete the OTP entry so it cannot be used again
            $deleteStmt = $conn->prepare("DELETE FROM user_otp WHERE user_id = ? AND otp = ?");
            $deleteStmt->bind_param("is", $userId, $otp);
            $deleteStmt->execute();

            $activateStmt = $conn->prepare("UPDATE `$tableName` SET is_active = 1 WHERE id = ?");
            $activateStmt->bind_param("i", $userId);
            $activateStmt->execute();
            
            // This code snippet should follow immediately after the previously shown block

            // Participant case: check and insert into ParticipantRegistry
            if ($usertype === 'participant') {
                $checkExistQuery = $conn3->prepare("SELECT participant_id FROM ParticipantRegistry WHERE participant_id = ?");
                $checkExistQuery->bind_param("i", $userId);
                $checkExistQuery->execute();
                $result = $checkExistQuery->get_result();
                if ($result->num_rows == 0) { // If user does not exist, insert
                    $insertRegistryQuery = $conn3->prepare("INSERT INTO ParticipantRegistry (participant_id) VALUES (?)");
                    $insertRegistryQuery->bind_param("i", $userId);
                    if (!$insertRegistryQuery->execute()) {
                        error_log("Error inserting participant into ParticipantRegistry: " . $conn3->error);
                    }
                }
            } elseif ($usertype === 'researcher') {
                // Researcher case: check and insert into ResearcherRegistry
                $checkExistQuery = $conn3->prepare("SELECT researcher_id FROM ResearcherRegistry WHERE researcher_id = ?");
                $checkExistQuery->bind_param("i", $userId);
                $checkExistQuery->execute();
                $result = $checkExistQuery->get_result();
                if ($result->num_rows == 0) { // If user does not exist, insert
                    $insertRegistryQuery = $conn3->prepare("INSERT INTO ResearcherRegistry (researcher_id) VALUES (?)");
                    $insertRegistryQuery->bind_param("i", $userId);
                    if (!$insertRegistryQuery->execute()) {
                        error_log("Error inserting researcher into ResearcherRegistry: " . $conn3->error);
                    }
                }
            }
            // Continue with the rest of your script...

            // Alternatively, if you prefer marking the OTP as used instead of deleting,
            // you might add an 'is_used' column (TINYINT or BOOLEAN) to your 'user_otp' table and set it to 1 (or TRUE) here
            // $updateStmt = $conn->prepare("UPDATE user_otp SET is_used = 1 WHERE user_id = ? AND otp = ?");
            // $updateStmt->bind_param("is", $userId, $otp);
            // $updateStmt->execute();
    
            // Proceed to create JWT
            // Proceed to create JWT
            $jwt = create_jwt($userId, $email, $usertype); // Pass usertype as a parameter
            echo json_encode(["message" => "OTP verified successfully. Account activated.", "email" => $email, "token" => $jwt]);

        } else {
            http_response_code(401); // Unauthorized
            echo json_encode(["error" => "OTP is invalid or expired."]);
        }
    } else {
        http_response_code(404); // Not Found
        echo json_encode(["error" => "No OTP found for user."]);
    }
    $emailStmt->close();
    $stmt->close();
    $conn->close();
} else {
    http_response_code(400); // Bad Request
    echo json_encode(["error" => "Missing required fields."]);
}
?>
