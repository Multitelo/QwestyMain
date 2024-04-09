<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php'; // Adjust the path as needed for Composer's autoload file

include "./cone.php"; // Ensure this path is correct

// This function retrieves the email based on userId and tableName
function retrieveEmail($userId, $tableName, $conn) {
    $stmt = $conn->prepare("SELECT email FROM `$tableName` WHERE id = ? LIMIT 1");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    if ($row = $result->fetch_assoc()) {
        return $row['email'];
    } else {
        return null; // User not found, or no email associated with this ID
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['userId'], $_POST['usertype']) && $_POST['action'] == 'resend') {
    $userId = $_POST['userId'];
    $usertype = $_POST['usertype'];

    if ($usertype == 'participant') {
        $conn = $conn1; // Connection for participants
        $tableName = 'parti'; // Participant table
    } elseif ($usertype == 'researcher') {
        $conn = $conn2; // Connection for researchers
        $tableName = 'resead'; // Researcher table
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid user type']);
        exit;
    }

    // Retrieve the user's email from the database
    $email = retrieveEmail($userId, $tableName, $conn);
    
    if (!$email) {
        http_response_code(404);
        echo json_encode(["error" => "Email not found for user."]);
        exit;
    }

    // Generate a new OTP and expiration time
    $newOtp = rand(10000, 99999);
    $newExpiry = date('Y-m-d H:i:s', strtotime('+1 hour'));

    // Update the OTP in the database
    $updateOtpStmt = $conn->prepare("UPDATE user_otp SET otp = ?, expires_at = ? WHERE user_id = ?");
    $updateOtpStmt->bind_param("ssi", $newOtp, $newExpiry, $userId);
    if (!$updateOtpStmt->execute()) {
        http_response_code(500);
        echo json_encode(["error" => "Could not update OTP."]);
        exit;
    }
    $updateOtpStmt->close();

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.qwesty.site';
        $mail->SMTPAuth = true;
        $mail->Username = 'securemail@qwesty.site';
        $mail->Password = 'Qwestyteam2023.';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Recipients
        $mail->setFrom('securemail@qwesty.site', 'Qwesty Secure');
        $mail->addAddress($email); // Add a recipient

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Your OTP';
        $mail->Body    = 'Here is your OTP for login: ' . $newOtp;

        $mail->send();
        echo json_encode(["message" => "New OTP sent to your email."]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["error" => "Mailer Error: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode(["error" => "Missing required fields or invalid action."]);
}
?>
