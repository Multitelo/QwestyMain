<?php
require './vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function create_jwt($userId, $email, $usertype) {
    date_default_timezone_set('Africa/Lagos');
    $issuedAt = time();
    $expirationTime = $issuedAt + 3600; // Token valid for 1 hour
    $payload = [
        'iat' => $issuedAt,
        'exp' => $expirationTime,
        'userId' => $userId,
        'email' => $email,
        "usertype" => $usertype 
    ];

    $secretKey = 'Multitelo_Qwesty';
    $jwt = JWT::encode($payload, $secretKey, 'HS256');
    echo json_encode(['message' => "Signin successful", 'token' => $jwt]);
}
?>
