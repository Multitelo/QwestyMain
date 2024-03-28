<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

require_once 'decode.php'; // For JWT token decoding
require_once 'cone.php'; // For database connection

// Function to extract JWT token from the Authorization header
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

// Assuming the survey ID is passed in the URL parameter named 'survey_id'
if (!isset($_GET['survey_id'])) {
    echo json_encode(['success' => false, 'message' => 'Survey ID is required']);
    exit;
}

$survey_id = $_GET['survey_id'];

// Prepare the statement for selecting survey and questions
$stmt = $conn3->prepare("SELECT sq.QuestionID, sq.QuestionText, sq.QuestionOrder, sq.QuestionType, sq.Options, sq.ImageURL FROM SurveyQuestions sq WHERE sq.SurveyID = ?");
$stmt->bind_param("i", $survey_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $survey_data = array();
    while ($row = $result->fetch_assoc()) {
        $survey_data[] = array(
            'question_id' => $row['QuestionID'],
            'question_text' => $row['QuestionText'],
            'question_order' => $row['QuestionOrder'],
            'question_type' => $row['QuestionType'],
            'options' => json_decode($row['Options'], true),
            'image_url' => $row['ImageURL']
        );
    }
    echo json_encode(['success' => true, 'survey_data' => $survey_data]);
} else {
    echo json_encode(['success' => false, 'message' => 'No questions found for the given survey ID']);
}

$stmt->close();
$conn3->close();
?>
