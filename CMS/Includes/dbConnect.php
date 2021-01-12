<?php
include_once "sqlQuery.php";


$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "LoginSystem";
//for connection to xampp PhpMyAdmin

$conn =new mysqli($dbServerName, $dbUsername, $dbPassword);
if ($conn->connect_errno) {
    echo("Connection failed: " . $conn->connect_err);
    exit;
}
$sql="CREATE DATABASE IF NOT EXISTS ".$dbName.";";
$conn->query($sql);
if(!$conn->select_db($dbName)){
    echo "Error create database: ". $conn->error;
}

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