<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

require_once 'decode.php';
require_once 'cone.php';


// Extracting JWT from the Authorization header
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
        $researcherId = $userData['userId']; // Adjust according to your JWT payload

        // Decode JSON payload from POST request
        $data = json_decode(file_get_contents('php://input'), true);

        // Validate required fields
        if (!empty($data['survey_type']) && !empty($data['title']) && !empty($data['field_of_research'])) {
            // Sanitize input data is not necessary with prepared statements but ensure data integrity
            $survey_type = $data['survey_type'];
            $title = $data['title'];
            $description = $data['description'] ?? ''; // Optional
            $field_of_research = $data['field_of_research'];

            // Prepared statement for inserting survey data
            $stmt = $conn3->prepare("INSERT INTO Surveys (Title, Description, ResearcherID, SurveyType, FieldOfResearch) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("ssiss", $title, $description, $researcherId, $survey_type, $field_of_research);

            if ($stmt->execute()) {
                // Success
                $last_survey_id = $conn3->insert_id;
                echo json_encode(['success' => true, 'survey_id' => $last_survey_id]);
            } else {
                // Database error
                echo json_encode(['success' => false, 'error' => $stmt->error]);
            }
            $stmt->close();
        } else {
            // Missing required fields
            echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        }
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
