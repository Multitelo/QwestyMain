<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php'; 
// Include necessary files and functions
require_once 'cone.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate form data (you may add more validation as needed)

    // Sanitize and validate email
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email format']);
        exit;
    }

    // Get user type
    $user_type = $_POST["usertype"];

    // Determine which database connection to use based on user type
    $conn = ($user_type == "participant") ? $conn1 : $conn2;

    // Check if email exists for the selected user type
    $sql = "SELECT * FROM resead WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Generate a unique token
        $token = bin2hex(random_bytes(16)); // Generate a 32-character hexadecimal token

        // Store the token in the database along with the user ID and an expiration time
        $row = $result->fetch_assoc();
        $user_id = $row['id'];
        $expiration_time = date('Y-m-d H:i:s', strtotime('+1 hour')); // Token expires in 1 hour

        $insert_sql = "INSERT INTO pwd_reset_tokens (user_id, token, expiration_time) VALUES ('$user_id', '$token', '$expiration_time')";
        if ($conn->query($insert_sql) === TRUE) {
            // Send email to the user with a link containing the token
            $mail = new PHPMailer(true);
            try {
                $mail->isSMTP();  // Set mailer to use SMTP
                $mail->Host = 'mail.qwesty.site';  // Specify main and backup SMTP servers
                $mail->SMTPAuth = true;  // Enable SMTP authentication
                $mail->Username = 'securemail@qwesty.site';  // SMTP username
                $mail->Password = 'Qwestyteam2023.';  // SMTP password
                $mail->SMTPSecure = 'ssl';  // Enable TLS encryption, `ssl` also accepted
                $mail->Port = 465;  // TCP port to connect to
                
                // Recipients
                $mail->setFrom('securemail@qwesty.site', 'Qwesty');
                $mail->addAddress($email); // Add a recipient
                
                // Content
                $mail->isHTML(true); // Set email format to HTML
                $mail->Subject = 'Password Reset';
                $mail->Body    = 'Click the link to reset your password: <a href="https://example.com/reset-password?token=' . $token . '">Reset Password</a>';
                
                $mail->send();
                
                echo json_encode(['success' => true, 'message' => 'Password reset link sent to your email']);
            } catch (Exception $e) {
                echo json_encode(['success' => false, 'message' => 'Error sending email: ' . $mail->ErrorInfo]);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Error generating reset token']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Email not found']);
    }

    // Close database connection
    $conn->close();
}
?>