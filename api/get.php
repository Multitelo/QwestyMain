<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

require_once 'decode.php'; // For JWT token decoding
require_once 'cone.php';

function getBearerToken() {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            return $matches[1];
        }
    }
    return null;
}

$jwt = getBearerToken(); // Extract JWT token from the Authorization header
$userData = decode_jwt($jwt); // Decode and validate JWT token

if (!$userData) {
    echo json_encode(['success' => false, 'message' => 'Authentication failed']);
    exit;
}

// Extract user ID and email from the decoded JWT token
$user_id = $userData['userId'];
$email = $userData['email'];

// echo "User ID: $user_id, Email: $email\n";

// Search the corresponding table in cone2 for user data
$sql = "SELECT * FROM resead WHERE id = $user_id";
$result = $conn2->query($sql);

if ($result->num_rows > 0) {
    // Fetch user data from cone2
    $user_data = $result->fetch_assoc();
    unset($user_data['password']);
    var_dump($user_data);
    // Check if the email from JWT matches the retrieved email from database
    if ($user_data['email'] !== $email) {
        echo json_encode(['success' => false, 'message' => 'Email does not match']);
        exit;
    }

    // If everything is fine, store the data for future use
    $username = $user_data['username'];
    // You can store other data here as needed
} else {
    echo json_encode(['success' => false, 'message' => 'User data not found']);
    exit;
}


// Search the corresponding table in cone3 for user data
$sql = "SELECT * FROM researcherregistry WHERE id = $user_id";
$result = $conn3->query($sql);

if ($result->num_rows > 0) {
    // Fetch user data from cone3
    $researcher_data = $result->fetch_assoc();
    // You can store researcher data here as needed
    // var_dump($researcher_data);
    $creation = $researcher_data['registered_at'];

} else {
    echo json_encode(['success' => false, 'message' => 'Researcher data not found']);
    exit;
}

// Close cone3 connection
$conn3->close();
$conn2->close();

// At this point, you have user data and researcher data available for further processing
?>
