<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
// Database 1 connection parameters
    $db1_servername = "localhost";
    $db1_username = "root";
    $db1_password = "";
    $db1_database = "qwestyparti";

    // // Database 2 connection parameters
    // $db2_servername = "localhost";
    // $db2_username = "Multitelo";
    // $db2_password = "k77359095";
    $db2_database = "qwestyresea";
    $db3_database = "survey";

    // Create connections to each database
    $conn1 = mysqli_connect($db1_servername, $db1_username, $db1_password, $db1_database);
    $conn2 = mysqli_connect($db1_servername, $db1_username, $db1_password, $db2_database);
    $conn3 = mysqli_connect($db1_servername, $db1_username, $db1_password, $db3_database);

    // Check connections for database 1
    if (!$conn1) {
        die("Connection to database 1 failed: " . mysqli_connect_error());
    }

    // Check connections for database 2
    if (!$conn2) {
        die("Connection to database 2 failed: " . mysqli_connect_error());
    }

    // Check connections for database 3
    if (!$conn3) {
    die("Connection to database 2 failed: " . mysqli_connect_error());
    }
// echo "connected"

// // Example query on database 1
// $query1 = "SELECT * FROM table1";
// $result1 = mysqli_query($conn1, $query1);
// // Process $result1...

// // Example query on database 2
// $query2 = "SELECT * FROM table2";
// $result2 = mysqli_query($conn2, $query2);
// // Process $result2...

// // Close connections

?>
