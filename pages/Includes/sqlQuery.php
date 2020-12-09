<?php
require_once dirname(__FILE__).'/globalVariables.php';



function createTable($conn) {
    $sql = "CREATE TABLE IF NOT EXISTS users(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        firstName varchar(256) not null,
        lastName varchar(256) not null,
        email varchar(256) not null,
        pwd varchar(256) not null,
        role varchar (256) not null
    );";

    $conn->query($sql);
    $sql = "CREATE TABLE IF NOT EXISTS HomeUser(
                    Hid INT(100) AUTO_INCREMENT PRIMARY KEY,
                    HName VARCHAR (200) NOT NULL,
                    HNRIC VARCHAR (20) NOT NULL,
                    HContatcnum VARCHAR (15) NOT NULL,
                    HEmail VARCHAR (50) NOT NULL,
                    HPromocode VARCHAR (10) NOT NULL,
                    HICFront VARCHAR (80),
                    HICBack VARCHAR (80),
                    HUtilitybill VARCHAR (80));";
    $conn->query($sql);   
}

function insertIntoTable($fields, $table, $fieldNames){
    "INSERT INTO TABLE '$table' ('$fieldNames') 
    VALUES($fields) ";
}
function deleteTable($table){}
function deleteData($fields, $table){}
function updateData($fields, $table){}

function getFields($databaseName, $tableName) {
    $sql = "SELECT COLUMN_NAME
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_SCHEMA = '$databaseName' AND TABLE_NAME = '$tableName';";
    $result = mysqli_query($GLOBALS["conn"], $sql);
    $numOfRows = mysqli_num_rows($result);
    $data = array();
    for($i=0; $i<$numOfRows; $i++){
        // echo mysqli_fetch_assoc($result)["COLUMN_NAME"];
        $data[$i] = mysqli_fetch_assoc($result)["COLUMN_NAME"];
    }
return $data;

}


