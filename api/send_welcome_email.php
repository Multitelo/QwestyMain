<?php
// Assuming PHPMailer is already installed via Composer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

function sendWelcomeEmail($email) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'mail.qwesty.site';
        $mail->SMTPAuth = true;
        $mail->Username = 'securemail@qwesty.site';
        $mail->Password = 'Qwesty#secure1';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Recipients
        $mail->setFrom('securemail@qwesty.site', 'Solvety');
        $mail->addAddress($email);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Welcome to Solvety!';
        $mail->Body    = '<h1>Welcome!</h1><p>Thank you for signing up with us. We are glad to have you on board.</p>';

        $mail->send();
        return true;
    } catch (Exception $e) {
        // Log error or handle accordingly
        return false;
    }
}
?>
