<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header('Content-Type: application/json');

// Include database connection
include './cone.php';

// Retrieve data from POST request
$username = isset($_POST['username']) ? $_POST['username'] : null;
$usertype = isset($_POST['usertype']) ? $_POST['usertype'] : null;
$response = ['isAvailable' => true];

if (!empty($username) && !empty($usertype)) {
    // Select the appropriate database connection and table name based on usertype
    if ($usertype == 'participant') {
        $conn = $conn1; // Use connection for participants
        $tableName = 'parti';
    } elseif ($usertype == 'researcher') {
        $conn = $conn2; // Use connection for researchers
        $tableName = 'resead';
    } else {
        // Invalid user type
        echo json_encode(['error' => 'Invalid user type']);
        exit;
    }
    
    // Sanitize username input
    $username = mysqli_real_escape_string($conn, $username);
    
    // Check if username exists in the selected table
    $sql = "SELECT COUNT(*) AS count FROM `$tableName` WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    
    if ($result['count'] > 0) {
        // Username already exists for the selected user type
        $response['isAvailable'] = false;
    }
    
    $stmt->close();
    mysqli_close($conn);
} else {
    $response = ['error' => 'Username or user type not provided'];
}

echo json_encode($response);
exit();
?>
