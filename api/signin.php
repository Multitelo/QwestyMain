<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}

// Database connection parameters
$db_servername = "localhost";
$db_username = "Multitelo";
$db_password = "77359095";
$db_database = "qwestyparti";

// Create connection
$conn = new mysqli($db_servername, $db_username, $db_password, $db_database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Debugging statement to print request method
echo "Request Method: " . $_SERVER["REQUEST_METHOD"] . "<br>";

// Debugging statement to print contents of $_POST array
echo "POST Data: ";
print_r($_POST);

// Check if the request method is POST and required fields are set
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email']) && isset($_POST['usertype']) && isset($_POST['username']) && isset($_POST['password']) && isset($_POST['confirmPwd'])) {
    // Retrieve POST data and sanitize if necessary
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $usertype = mysqli_real_escape_string($conn, $_POST['usertype']);
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirmPwd = mysqli_real_escape_string($conn, $_POST['confirmPwd']);

    // Construct SQL query with prepared statement
    $sql = "INSERT INTO `parti`(`email`, `username`, `password`, `usertype`, `confirmPwd`) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $email, $username, $password, $usertype, $confirmPwd);

    // Execute the query
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close statement
    $stmt->close();
} else {
    // Handle the case where required fields are missing or request method is not POST
    echo "ERROR: Missing required fields or invalid request method.";
}

// Close connection
$conn->close();
?>
