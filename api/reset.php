<?php
// Allow CORS
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type: application/json");

// Include necessary files and functions
require_once 'decode.php'; // For JWT token decoding
require_once 'cone.php';

// Function to extract JWT token from request headers
function getBearerToken() {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            return $matches[1];
        }
    }
    return null;
}

// Extract JWT token from the Authorization header
$jwt = getBearerToken();

// Decode and validate JWT token
$userData = decode_jwt($jwt);

// Check if JWT token is valid
if (!$userData) {
    // If authentication failed, send error response
    echo json_encode(['success' => false, 'message' => 'Authentication failed']);
    exit;
}

// Extract user ID from decoded JWT token
$user_id = $userData['userId'];

// Check if request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get old password and new password from POST request
    $old_password = $_POST['old_password'];
    $new_password = $_POST['new_password'];

    // Verify old password against the one stored in the database
    $sql = "SELECT password FROM resead WHERE id = $user_id";
    $result = $conn2->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $stored_password = $row['password'];

        // Verify old password
        if (password_verify($old_password, $stored_password)) {
            // Hash the new password
            $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

            // Update password in the database
            $update_sql = "UPDATE resead SET password = '$hashed_password' WHERE id = $user_id";
            if ($conn2->query($update_sql) === TRUE) {
                // Password updated successfully, send success response
                echo json_encode(['success' => true, 'message' => 'Password reset successfully']);
            } else {
                // Error updating password, send error response
                echo json_encode(['success' => false, 'message' => 'Error updating password']);
            }
        } else {
            // Old password does not match, send error response
            echo json_encode(['success' => false, 'message' => 'Old password does not match']);
        }
    } else {
        // User not found, send error response
        echo json_encode(['success' => false, 'message' => 'User not found']);
    }

    // Close database connection
    $conn2->close();
} else {
    // If request method is not POST, send error response
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
