<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

include "./cone.php"; // Ensure this path is correct
require './send_otp_mail.php';
require './send_welcome_email.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'], $_POST['usertype'], $_POST['username'], $_POST['password'])) {
    $email = $_POST['email'];
    $usertype = $_POST['usertype'];
    $username = $_POST['username'];
    $password = $_POST['password'];

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
        echo json_encode(["error" => "Invalid user type or database connection issue."]);
        exit;
    }
   
    $email = mysqli_real_escape_string($conn, $email);
    $username = mysqli_real_escape_string($conn, $username);

    $stmt = $conn->prepare("INSERT INTO `$tableName` (`email`, `username`, `password`) VALUES (?, ?, ?)");
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt->bind_param("sss", $email, $username, $hashedPassword);

    if ($stmt->execute()) {
        $newUserId = mysqli_insert_id($conn);
        if ($newUserId > 0) {
            $otpSent = sendOTPMail($email, $newUserId, $usertype, $conn1, $conn2);
            $welcomeEmailSent = sendWelcomeEmail($email);
        
            // Prepare the base response with newUserId included
            $response = [
                'newUserId' => $newUserId,
            ];
            
            if ($otpSent && $welcomeEmailSent) {
                $response['success'] = true;
                $response['message'] = "Account created successfully. Verification OTP and welcome email sent.";
            } elseif ($otpSent && !$welcomeEmailSent) {
                $response['success'] = false;
                $response['error'] = "Account created and OTP sent, but failed to send welcome email.";
            } elseif (!$otpSent) {
                $response['success'] = false;
                $response['error'] = "Account created, but verification email failed to send.";
            }
        } else {
            $response = [
                'success' => false,
                'error' => "User ID not found. Account creation might have failed."
            ];
        }
    } else {
        $response = [
            'success' => false,
            'error' => "Account creation failed: " . $stmt->error
        ];
    }

    echo json_encode($response);

    $stmt->close();
    mysqli_close($conn);
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields or invalid request method."]);
}
?>
