<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header('Content-Type: application/json');

// Debugging statement to print request method
// echo "Request Method: " . $_SERVER["REQUEST_METHOD"] . "<br>";

// // Debugging statement to print contents of $_POST array
// echo "POST Data: ";
// print_r($_POST);

// Include database connection
include './cone.php';

// Retrieve data from POST request
$email = $_POST['email'];
$usertype = $_POST['usertype'];

$response = ['isAvailable' => true];

if (!empty($email) && !empty($usertype)) {
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
    
    // Sanitize email input
    $email = mysqli_real_escape_string($conn, $email);
    
    // Check if email exists in the selected table
    $sql = "SELECT COUNT(*) AS count FROM `$tableName` WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    
    if ($result['count'] > 0) {
        // Email already exists for the selected user type
        $response['isAvailable'] = false;
    }
    
    $stmt->close();
    mysqli_close($conn);
} else {
    $response = ['error' => 'Email or user type not provided'];
}

echo json_encode($response);
exit();
?>
