<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

require_once 'decode.php'; // For JWT token decoding
require_once 'cone.php'; // Assume this file contains the database connections conn1, conn2, and conn3

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

// Extract user type, user ID, and email from the decoded JWT token
$userType = $userData['usertype'];
$user_id = $userData['userId'];
$email = $userData['email'];

// Define SQL query templates for user and registry data
$userDataQueryTemplate = "SELECT email, username, is_active FROM %s WHERE id = ?";
$registryDataQueryTemplate = "SELECT registered_at FROM %s WHERE id = ?";

// Choose the appropriate database and table based on userType
if ($userType === 'participant') {
    $conn = $conn1; // Assumes $conn1 is the connection for participants
    $userDataQuery = sprintf($userDataQueryTemplate, "parti");
    $registryDataQuery = sprintf($registryDataQueryTemplate, "participantregistry");
} elseif ($userType === 'researcher') {
    $conn = $conn2; // Assumes $conn2 is the connection for researchers
    $userDataQuery = sprintf($userDataQueryTemplate, "resead");
    $registryDataQuery = sprintf($registryDataQueryTemplate, "researcherregistry");
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid user type']);
    exit;
}

// Execute user data query
$stmt = $conn->prepare($userDataQuery);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user_data = $result->fetch_assoc();

    // Check if the email from JWT matches the retrieved email from database
    if ($user_data['email'] !== $email) {
        echo json_encode(['success' => false, 'message' => 'Email does not match']);
        exit;
    }

    // Process user data (email, username, is_active)
    $username = $user_data['username'];
    $is_active = $user_data['is_active'];
} else {
    echo json_encode(['success' => false, 'message' => 'User data not found']);
    exit;
}

// Execute registry data query using conn3
$stmt = $conn3->prepare($registryDataQuery);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$registryResult = $stmt->get_result();

if ($registryResult->num_rows > 0) {
    $registry_data = $registryResult->fetch_assoc();
    // Process registry data (date_created)
    $date_created = $registry_data['registered_at'];
} else {
    echo json_encode(['success' => false, 'message' => "{$userType} registry data not found"]);
    exit;
}

$conn->close();
$conn3->close();

// Output or further processing of user and registry data
// Example: Outputting the collected data
$response = [
    'success' => true,
    'data' => [
        'email' => $user_data['email'],
        'username' => $username,
        'is_active' => $is_active,
        'date_created' => $date_created
    ]
];

echo json_encode($response);
?>
