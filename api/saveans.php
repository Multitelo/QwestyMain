<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

require_once 'decode.php'; // For JWT token decoding
require_once 'cone.php'; // For database connection

function getBearerToken() {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        if (preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches)) {
            return $matches[1];
        }
    }
    return null;
}

$jwt = getBearerToken();
$userData = decode_jwt($jwt);

if (!$userData) {
    echo json_encode(['success' => false, 'message' => 'Authentication failed']);
    exit;
}

// Handling POST request for saving answers
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['save_answers']) && $_GET['save_answers'] == 'true') {
    $inputJSON = file_get_contents('php://input');
    $answers = json_decode($inputJSON, true);
    $survey_id = isset($_GET['survey_id']) ? intval($_GET['survey_id']) : 0; // Get survey ID from the query parameter

    if (is_array($answers) && $survey_id > 0) {
        foreach ($answers as $answer) {
            // Save each answer to the database with the survey ID
            $stmt = $conn3->prepare("INSERT INTO participantanswers (UserID, SurveyID, QuestionID, AnswerText) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("iiis", $userData['user_id'], $survey_id, $answer['question_id'], $answer['answer_text']);
            $stmt->execute();
        }
        echo json_encode(['success' => true, 'message' => 'Answers saved successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid answers format or missing survey ID']);
    }
    exit;
}

// Existing functionality to fetch survey questions remains unchanged...

$stmt->close();
$conn3->close();
?>
