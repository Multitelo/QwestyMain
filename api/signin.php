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
        echo json_encode(["error" => "Invalid user type."]);
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
            if (sendOTPMail($email, $newUserId, $usertype, $conn1, $conn2)) {
                if(sendWelcomeEmail($email)) {
                    echo json_encode(["message" => "Account created successfully. Verification OTP and welcome email sent."]);
                    
                } else {
                    echo json_encode(["error" => "Account created and OTP sent, but failed to send welcome email."]);
                }
            } else {
                echo json_encode(["error" => "Account created, but verification email failed to send."]);
            }
        } else {
            echo json_encode(["error" => "User ID not found. Account creation might have failed."]);
        }
    } else {
        echo json_encode(["error" => "Account creation failed: " . $stmt->error]);
    }
    
    

    $stmt->close();
    mysqli_close($conn);
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields or invalid request method."]);
}
?>
