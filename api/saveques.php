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
$stmt = $conn3->prepare("INSERT INTO SurveyQuestions (SurveyID, QuestionText, QuestionOrder, QuestionType, Options, ImageURL) VALUES (?, ?, ?, ?, ?, ?)");

$success = true;
foreach ($questions as $question) {
    // Extract question text, order, type, options, and image URL
    $question_text = $question['question_text'];
    $question_order = isset($question['question_order']) ? $question['question_order'] : 0;
    $question_type = $question['question_type']; // Assuming question type is provided
    $options = isset($question['options']) ? json_encode($question['options']) : null; // JSON encode options if available
    $image_url = null;

    // Handle image upload if present
    if ($question_type === 'image') {
        if (isset($question['image_data'])) {
            // Handle image upload, store image data and get the URL
            $image_data = $question['image_data']; // Assuming image data is base64 encoded
            $image_url = saveImageAndGetURL($image_data); // Implement this function to save the image and return its URL
        }
    }

    $stmt->bind_param("isisss", $survey_id, $question_text, $question_order, $question_type, $options, $image_url);
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

// Function to save image data and return its URL
function saveImageAndGetURL($image_data) {
    // Define the directory where images will be stored
    $upload_dir = 'uploads/';

    // Generate a unique filename for the image
    $image_filename = uniqid() . '.jpg'; // You can use other file formats as needed

    // Specify the path where the image will be saved
    $image_path = $upload_dir . $image_filename;

    // Decode the base64 image data and save it to the specified path
    $decoded_image_data = base64_decode($image_data);
    if (file_put_contents($image_path, $decoded_image_data)) {
        // Return the URL of the saved image
        return $image_path;
    } else {
        // If failed to save the image, return null or handle the error accordingly
        return null;
    }
}

?>
