<?php
include_once './cone.php';

// Assuming the form is submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST['email'];
    $usertype = $_POST['usertype']; // Assuming this is the radio button value
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Insert data into the appropriate table based on usertype
    if ($usertype === 'participant') {
        $sql = "INSERT INTO parti (email, username, password) VALUES ('$email', '$username', '$password')";
    } elseif ($usertype === 'researcher') {
        $sql = "INSERT INTO resea (email, bname, password) VALUES ('$email', '$username', '$password')";
    } else {
        // Handle invalid user type
        echo "Invalid user type";
        exit();
    }

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>