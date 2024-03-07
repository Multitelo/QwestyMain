<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

include "./cone.php"; // Ensure this path is correct
require './create_jwt.php'; // Include the JWT creation script

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'], $_POST['password'], $_POST['usertype'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $usertype = $_POST['usertype'];

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

    // Prepare SQL statement for user credential validation
    $stmt = $conn->prepare("SELECT id, password FROM `$tableName` WHERE email = ?");
    $stmt->bind_param("s", $email);

    if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
            $stmt->bind_result($userId, $hashedPassword);
            $stmt->fetch();

            if (password_verify($password, $hashedPassword)) {
                // Password is correct, create JWT token
                create_jwt($userId, $email); // Call the JWT creation function
            } else {
                // Invalid password
                http_response_code(401);
                echo json_encode(["error" => "Invalid email or password."]);
            }
        } else {
            // email not found
            http_response_code(404);
            echo json_encode(["error" => "Invalid email or password."]);
        }
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
