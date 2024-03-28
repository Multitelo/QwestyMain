<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

require_once 'decode.php'; // Assuming decode.php handles JWT decoding
require_once 'cone.php'; // Database connection file

// Extract JWT from the Authorization header
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$jwt = null;
if (!empty($authHeader)) {
    if (preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
        $jwt = $matches[1];
    }
}

if ($jwt) {
    $userData = decode_jwt($jwt); // Decode JWT
    if ($userData) {
        // User authenticated
        $researcherId = $userData['userId']; // Extract user ID from decoded JWT payload

        // Prepared statement for selecting surveys linked to the researcherId
        $stmt = $conn3->prepare("SELECT * FROM Surveys WHERE ResearcherID = ?");
        $stmt->bind_param("i", $researcherId);

        if ($stmt->execute()) {
            // Success, fetch all surveys
            $result = $stmt->get_result();
            $surveys = [];
            while ($row = $result->fetch_assoc()) {
                $surveys[] = $row;
            }
            echo json_encode(['success' => true, 'surveys' => $surveys]);
        } else {
            // Database error
            echo json_encode(['success' => false, 'error' => $stmt->error]);
        }
        $stmt->close();
    } else {
        // Invalid or expired token
        echo json_encode(['success' => false, 'error' => 'Token invalid or expired']);
    }
} else {
    // No token provided
    echo json_encode(['success' => false, 'error' => 'No token provided']);
    exit;
}

// Optionally close the database connection if it's not needed anymore
$conn3->close();
?>
