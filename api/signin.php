<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

// Debugging statement to print request method
echo "Request Method: " . $_SERVER["REQUEST_METHOD"] . "<br>";

// Debugging statement to print contents of $_POST array
echo "POST Data: ";
print_r($_POST);

include "./cone.php"; // Ensure this path is correct
require './vendor/autoload.php'; // Adjust this path if necessary

use Firebase\JWT\JWT;

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'], $_POST['usertype'], $_POST['username'], $_POST['password'])) {
    $email = $_POST['email'];
    $usertype = $_POST['usertype'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Database connection and table selection based on user type
    $conn = $usertype === 'participant' ? $conn1 : ($usertype === 'researcher' ? $conn2 : null);
    $tableName = $usertype === 'participant' ? 'parti' : ($usertype === 'researcher' ? 'resead' : '');

    if (!$conn || !$tableName) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid user type."]);
        exit;
    }

    // Prevent SQL injection
    $email = mysqli_real_escape_string($conn, $email);
    $username = mysqli_real_escape_string($conn, $username);

    // Prepare SQL statement for inserting user data
    $stmt = $conn->prepare("INSERT INTO `$tableName` (`email`, `username`, `password`) VALUES (?, ?, ?)");
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash the password
    $stmt->bind_param("sss", $email, $username, $hashedPassword);

    if ($stmt->execute()) {
        $issuedAt = time();
        $expirationTime = $issuedAt + 3600; // Token valid for 1 hour
        $payload = [
            'iat' => $issuedAt, // Issued at
            'exp' => $expirationTime, // Expiration time
            'userId' => $stmt->insert_id, // User ID from the inserted record
        ];

        $secretKey = 'your_secret_key'; // Replace with your actual secret key
        $jwt = JWT::encode($payload, $secretKey);
        echo json_encode(['message' => "Signup successful", 'token' => $jwt]);
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
