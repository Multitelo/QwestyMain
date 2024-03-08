<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

include "./cone.php"; // Ensure this path is correct
// require './create_jwt.php'; // Include the JWT creation script
require './send_otp_mail.php'; // Include the separate script for sending the OTP email

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'], $_POST['password'], $_POST['usertype'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $usertype = $_POST['usertype'];

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

    $email = mysqli_real_escape_string($conn, $email);

    // Prepare SQL statement for user credential validation
    $stmt = $conn->prepare("SELECT id, password FROM `$tableName` WHERE email = ?");
    $stmt->bind_param("s", $email);

    if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
            $stmt->bind_result($userId, $hashedPassword);
            $stmt->fetch();

            if (password_verify($password, $hashedPassword)) {
                // If password is correct, send OTP
                if (sendOTPMail($email, $userId, $usertype, $conn1, $conn2)) {
                    // OTP sent successfully, create JWT token
                    echo json_encode(["message" => "OTP sent successfully."]);
                     // Assuming $userId is fetched from the database
                } else {
                    // Error handling if OTP mail fails to send
                    http_response_code(500);
                    echo json_encode(["error" => "Failed to send OTP."]);
                }
            } else {
                // Invalid password
                http_response_code(401);
                echo json_encode(["error" => "Invalid password."]);
            }
        } else {
            // email not found
            http_response_code(404);
            echo json_encode(["error" => "Invalid email."]);
        }
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Error: " . $conn->error]);
    }

    $stmt->close();
    mysqli_close($conn);
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields or invalid request method."]);
}
?>
