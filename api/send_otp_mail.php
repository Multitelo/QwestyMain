<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php'; // Adjust the path as needed for Composer's autoload file

function generateOTP() {
    return rand(10000, 99999);
}

function sendOTPMail($email, $userId, $usertype, $conn1, $conn2) {
    $otp = generateOTP();
    $expiresAt = date('Y-m-d H:i:s', strtotime('+10 minutes')); // OTP expires in 10 minutes
    
    // Choose the correct connection based on usertype
    $conn = ($usertype == 'participant') ? $conn1 : $conn2;

    // Store OTP in database
    $stmt = $conn->prepare("INSERT INTO user_otp (user_id, otp, expires_at) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $userId, $otp, $expiresAt);
    if (!$stmt->execute()) {
        // Handle error - unable to store OTP
        return false;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();  // Set mailer to use SMTP
        $mail->Host = 'mail.qwesty.site';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;  // Enable SMTP authentication
        $mail->Username = 'securemail@qwesty.site';  // SMTP username
        $mail->Password = 'Qwesty#secure1';  // SMTP password
        $mail->SMTPSecure = 'SSl';  // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 465;  // TCP port to connect to

        // Recipients
        $mail->setFrom('securemail@qwesty.site', 'Mailer');
        $mail->addAddress($email);  // Add a recipient

        // Content
        $mail->isHTML(true);  // Set email format to HTML
        $mail->Subject = 'Your OTP';
        $mail->Body    = 'Here is your OTP for login: ' . $otp;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('Mailer Error: ' . $mail->ErrorInfo);
        return false;  // Optionally, log this error or handle it further
    }
}
?>
