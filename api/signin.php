<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

include "./cone.php"; // Ensure this path is correct

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'], $_POST['usertype'], $_POST['username'], $_POST['password'])) {
    $email = $_POST['email'];
    $usertype = $_POST['usertype'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($usertype == 'participant') {
        $conn = $conn1;
        $tableName = 'parti';
    } elseif ($usertype == 'researcher') {
        $conn = $conn2;
        $tableName = 'resead';
    } else {
        echo json_encode(['error' => 'Invalid user type']);
        exit;
    }

    if (!$conn || !$tableName) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid user type."]);
        exit;
    }

    $email = mysqli_real_escape_string($conn, $email);
    $username = mysqli_real_escape_string($conn, $username);

    $stmt = $conn->prepare("INSERT INTO `$tableName` (`email`, `username`, `password`) VALUES (?, ?, ?)");
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt->bind_param("sss", $email, $username, $hashedPassword);

    if ($stmt->execute()) {
        // Include the JWT creation script here
        require './create_jwt.php';
        create_jwt($stmt->insert_id, $email); // Call the JWT creation function
        
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Error: " . $conn->error]);
    }

    $stmt->close();
    mysqli_close($conn);
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields or invalid request method."]);
}
?>
