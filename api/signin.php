<?php
    include_once './cone.php';
   

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
        


    if($conn1){
        echo "working";
    }elseif($conn2){
        echo "hello";
    }else{
        echo "failed";
    }

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
            $conn = $conn1;
        } elseif ($usertype === 'researcher') {
            $sql = "INSERT INTO resead (email, username, password) VALUES ('$email', '$username', '$password')";
            $conn = $conn2;
        } else {
            // Handle invalid user type
            echo "Invalid user type";
            exit();
        }
        
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }

    mysqli_close($conn1);
    mysqli_close($conn2);
?>