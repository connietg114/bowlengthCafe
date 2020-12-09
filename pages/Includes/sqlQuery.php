<?php
require_once dirname(__FILE__).'/globalVariables.php';



function createTable($conn) {
    $sql = "CREATE TABLE IF NOT EXISTS Users(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        firstName varchar(256) not null,
        lastName varchar(256) not null,
        email varchar(256) not null,
        pwd varchar(256) not null,
        role varchar (256) not null
    );";
    $conn->query($sql);

    // $sql = "CREATE TABLE IF NOT EXISTS HomeUser(
    //                 Hid INT(100) AUTO_INCREMENT PRIMARY KEY,
    //                 HName VARCHAR (200) NOT NULL,
    //                 HNRIC VARCHAR (20) NOT NULL,
    //                 HContatcnum VARCHAR (15) NOT NULL,
    //                 HEmail VARCHAR (50) NOT NULL,
    //                 HPromocode VARCHAR (10) NOT NULL,
    //                 HICFront VARCHAR (80),
    //                 HICBack VARCHAR (80),
    //                 HUtilitybill VARCHAR (80));";
    // $conn->query($sql);  

    $sql = "CREATE TABLE IF NOT EXISTS MembershipLevel(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        name varchar(256) not null,
        description varchar(256),
        points int(11) not null
    )";
    $conn->query($sql); 

    $sql = "CREATE TABLE IF NOT EXISTS MembershipCondition(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        membershipLevelId int(11) not null,
        memberId int(11)not null,
        points int(11) not null,
        FOREIGN KEY(membershipLevelId) REFERENCES Users(id)
        
    )";
    $conn->query($sql); 
}
function getData ($table){
    $sql = "SELECT * FROM $table";
    $result = mysqli_query($GLOBALS["conn"], $sql);
    $numOfRows = mysqli_num_rows($result);
    $data = array();
    $fieldNames = getFields($table);
    $fieldNamesString = implode(getFields($table)) ;
    $fieldNamesString = explode(" ", $fieldNamesString);

    if ($result){
        for($i=0; $i<$numOfRows; $i++){
            $aRow = array();
            $fetchItem = mysqli_fetch_assoc($result);
            for($j=0; $j<sizeof($fieldNames); $j++){
                $variable = $fieldNamesString[$j];
                // echo $j .", $variable".  ": " . $fetchItem[$variable] . " ";
                $aRow[$variable] = $fetchItem[$variable];
                
            }
            // echo $aRow;
            // return $aRow;
            $data[$i] = $aRow;
        }
        return $data;
    }
    else{
        echo mysqli_error($GLOBALS["conn"]);
    }
}

function insertIntoTable($fields, $table, $fieldNames){
    // "INSERT INTO TABLE '$table' ('$fieldNames') 
    // VALUES($fields) ";
}
function deleteTable($table){
    // $sql = 
}
function deleteData($id, $table){
    $sql = "DELETE FROM $table WHERE id = $id";
    $result = mysqli_query($GLOBALS["conn"], $sql);
    $numOfRows = mysqli_num_rows($result);
    // if($result){
    //     if($numOfRows>0){
    //         while($row=mysqli_fetch_assoc($result)){
                
    //         }
    //     }
       
    //     echo "Deleted!";
    // }else{
    //     echo mysqli_error($GLOBALS["conn"]);
    // }
}
function updateData($updateArray, $table, $id){
    $sql = "UPDATE $table SET $updateArray
            WHERE id = $id";
    $result = mysqli_query($GLOBALS["conn"], $sql);
    if($result){
        echo "Updated!";
    }else{
        echo mysqli_error($GLOBALS["conn"]);
    }
}

function getFields($tableName) {
    $dbName = $GLOBALS["dbName"];
    $sql = "SELECT COLUMN_NAME
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_SCHEMA = '$dbName' AND TABLE_NAME = '$tableName';";
    $result = mysqli_query($GLOBALS["conn"], $sql);
    $numOfRows = mysqli_num_rows($result);
    $data = array();
    if ($result){
        for($i=0; $i<$numOfRows; $i++){
            $data[$i] = mysqli_fetch_assoc($result)["COLUMN_NAME"] . " ";
        }
        return $data;
    }
    else{
        echo mysqli_error($GLOBALS["conn"]);
    }
    

}

function getFieldIndex($table){

}




