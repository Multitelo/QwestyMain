<?php

include "./cone.php"; // Ensure this path is correct
require './vendor/autoload.php'; // Adjust this path if necessary

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function decode_jwt($receivedToken) {
    $secretKey = 'Multitelo_Qwesty';
    try {
        $decoded = JWT::decode($receivedToken, new Key($secretKey, 'HS256'));
        // Convert the object to an associative array
        return (array) $decoded;
    } catch (Exception $e) {
        // Return error or false if token is invalid or expired
        return false;
    }
}




// include "./cone.php"; // Ensure this path is correct
// require './vendor/autoload.php'; // Adjust this path if necessary

// use Firebase\JWT\JWT;
// use Firebase\JWT\Key; // Make sure to include this line

// $receivedToken = '';
// $secretKey = 'Multitelo_Qwesty';

// try {
//     $decoded = JWT::decode($receivedToken, new Key($secretKey, 'HS256'));
//     // Access the decoded payload as needed
//     echo 'User ID: ' . $decoded->userId . PHP_EOL;
//     echo 'email: ' . $decoded->email . PHP_EOL;
// } catch (Exception $e) {
//     // Handle decode errors (e.g., invalid token, expired token)
//     echo 'Token invalid or expired: ' . $e->getMessage();
// }


?>
