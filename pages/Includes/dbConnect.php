<?php
include_once "Includes/sqlQuery.php";


$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "LoginSystem";
//for connection to xampp PhpMyAdmin

$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName, 3306);
if ($conn->connect_error) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
   
    // echo 'connected';
    
};

if (createTable($conn)===true){
    echo "Table MyGuests created successfully";
} else {
        echo $conn->error;
};



// if ($conn->query($sql) === TRUE) {
//     echo "Table MyGuests created successfully";
// } else {
//     echo "Error creating table: " . $conn->error;
// }

// $conn->close();