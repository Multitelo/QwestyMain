<?php
// Include necessary files and functions
require_once 'get.php'; // Replace with the filename containing your PHP code

// Example JWT token (replace with your actual token)
$jwt_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTEwNTkxNzcsImV4cCI6MTcxMTA2Mjc3NywidXNlcklkIjoiNiIsImVtYWlsIjoiZW1lbmlrZWF1Z3VzdGluZTMwMUBnbWFpbC5jb20ifQ.TdTVl0F-Q6yVFSSWz_gaq3XI-8iZUirRJzlkHlg9olY';

// Simulate request with JWT token
$_SERVER['HTTP_AUTHORIZATION'] = 'Bearer ' . $jwt_token;

// Execute your main PHP code
// This will run the authentication and data retrieval process
// The output will be JSON-encoded data sent to the client
// You can capture and print this output
ob_start();
require_once 'get.php'; // Replace with the filename containing your PHP code
$output = ob_get_clean();
echo $output;
?>