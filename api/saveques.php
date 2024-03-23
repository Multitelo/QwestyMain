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

// Decode JSON payload from POST request
$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['survey_id'], $data['questions']) || !is_array($data['questions'])) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields or invalid format']);
    exit;
}

$survey_id = $data['survey_id'];
$questions = $data['questions'];

// Prepare the statement for inserting questions
$stmt = $conn3->prepare("INSERT INTO SurveyQuestions (SurveyID, ParentQuestionID, QuestionText, QuestionType, Options, QuestionOrder) VALUES (?, ?, ?, ?, ?, ?)");

$success = true;
foreach ($questions as $question) {
    // Extract question text, type, order, and options
    $question_text = $question['question_text'];
    $question_type = $question['question_type']; // 'single_choice' or 'multiple_choice'
    $question_order = isset($question['question_order']) ? $question['question_order'] : 0;
    $parent_question_id = isset($question['parent_question_id']) ? $question['parent_question_id'] : null;
    $options = isset($question['options']) ? json_encode($question['options']) : null;

    $stmt->bind_param("iissis", $survey_id, $parent_question_id, $question_text, $question_type, $options, $question_order);
    if (!$stmt->execute()) {
        $success = false;
        break; // Stop on first error
    }
}

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Questions added successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to add questions', 'error' => $stmt->error]);
}

$stmt->close();
$conn3->close();
?>
