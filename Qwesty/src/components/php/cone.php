<?php
$servername = "localhost";
$username = "Multitelo";
$password = "77359095";
$dbname = "qwestymain";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>