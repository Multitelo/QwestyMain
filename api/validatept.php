<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header('Content-Type: application/json');

// Include necessary files and functions
require_once 'cone.php';

// Check if token is provided
if (isset($_GET['token'])) {
    // Sanitize and validate the token
    $token = filter_var($_GET['token'], FILTER_SANITIZE_STRING);

    // Check if token exists in the database
    $sql = "SELECT * FROM password_reset_tokens WHERE token = '$token'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Token exists, check if it has expired
        $row = $result->fetch_assoc();
        $expiration_time = strtotime($row['expiration_time']);
        $current_time = time();

        if ($current_time <= $expiration_time) {
            // Token is valid and has not expired
            echo json_encode(['success' => true, 'message' => 'Token is valid']);
        } else {
            // Token has expired
            echo json_encode(['success' => false, 'message' => 'Token has expired']);
        }
    } else {
        // Token does not exist in the database
        echo json_encode(['success' => false, 'message' => 'Invalid token']);
    }
} else {
    // Token is not provided
    echo json_encode(['success' => false, 'message' => 'Token is required']);
}

// Close database connection
$conn->close();
?>
