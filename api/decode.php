<?php

include "./cone.php"; // Ensure this path is correct
require './vendor/autoload.php'; // Adjust this path if necessary

use Firebase\JWT\JWT;
use Firebase\JWT\Key; // Make sure to include this line

$receivedToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDk4MDM1MjEsImV4cCI6MTcwOTgwNzEyMSwidXNlcklkIjoxMSwiZW1haWwiOiJlbWVuaWtlYXVndXN0aW5lMzAxQGdtYWlsLmNvbSJ9.5nJvV8uKOHQbzytyR8NSJurVOsDIGdXlkKZAOCOWL0I';
$secretKey = 'Multitelo_Qwesty';

try {
    $decoded = JWT::decode($receivedToken, new Key($secretKey, 'HS256'));
    // Access the decoded payload as needed
    echo 'User ID: ' . $decoded->userId . PHP_EOL;
    echo 'email: ' . $decoded->email . PHP_EOL;
} catch (Exception $e) {
    // Handle decode errors (e.g., invalid token, expired token)
    echo 'Token invalid or expired: ' . $e->getMessage();
}
?>
