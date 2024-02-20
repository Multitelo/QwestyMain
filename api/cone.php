<?php
// Database 1 connection parameters
$db1_servername = "localhost";
$db1_username = "Multitelo";
$db1_password = "77359095";
$db1_database = "qwestyparti";

// Database 2 connection parameters
$db2_servername = "localhost";
$db2_username = "Multitelo";
$db2_password = "77359095";
$db2_database = "qwestyresea";

// Create connections to each database
$conn1 = mysqli_connect($db1_servername, $db1_username, $db1_password, $db1_database);
$conn2 = mysqli_connect($db2_servername, $db2_username, $db2_password, $db2_database);

// Check connections
if (!$conn1 || !$conn2) {
    die("Connection failed: " . mysqli_connect_error());
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
// mysqli_close($conn1);
// mysqli_close($conn2);

?>
