<?php
global $dbName;
global $dbServerName;
global $dbUsername;
global $dbPassword;

global $conn;

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "LoginSystem";

$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName, 3306);
?> 