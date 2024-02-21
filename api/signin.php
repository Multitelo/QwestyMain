<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");

// // Debugging statement to print request method
// echo "Request Method: " . $_SERVER["REQUEST_METHOD"] . "<br>";

// // Debugging statement to print contents of $_POST array
// echo "POST Data: ";
// print_r($_POST);

// Include the file where $conn1 and $conn2 are defined
include "./cone.php";

// Check if the request method is POST and required fields are set
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email']) && isset($_POST['usertype']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['confirmPwd'])) {
    // Retrieve POST data
    $email = $_POST['email'];
    $usertype = $_POST['usertype'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirmPwd = $_POST['confirmPwd'];

    // Ensure password and confirmation password match
    if ($password !== $confirmPwd) {
        echo "Error: Passwords do not match.";
        exit;
    }

    // Select the appropriate database connection and table name based on usertype
    if ($usertype == 'participant') {
        $conn = $conn1; // Use connection for participants
        $tableName = 'parti';
    } elseif ($usertype == 'researcher') {
        $conn = $conn2; // Use connection for researchers
        $tableName = 'resead';
    } else {
        echo "ERROR: Invalid user type.";
        exit;
    }

    // Sanitize inputs to prevent SQL injection
    $email = mysqli_real_escape_string($conn, $email);
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password); // Consider hashing the password
    // $confirmPwd = mysqli_real_escape_string($conn, $confirmPwd); // Redundant due to password check above

    // Construct SQL query without usertype as it's not being inserted into the database
    $sql = "INSERT INTO `$tableName`(`email`, `username`, `password`) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Hash the password before storing it
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt->bind_param("sss", $email, $username, $hashedPassword);

    // Execute the query
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $conn->error;
    }

    // Close statement
    $stmt->close();
} else {
    echo "ERROR: Missing required fields or invalid request method.";
}

// Close the database connection if not needed further
mysqli_close($conn);
?>
