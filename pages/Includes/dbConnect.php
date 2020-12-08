<?php

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
   
    echo 'connected';
    // echo '</script>';
}