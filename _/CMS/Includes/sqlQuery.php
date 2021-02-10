<?php
require_once dirname(__FILE__).'/globalVariables.php';
// can rename this file to CreateTable.php



function createTable($conn) {
    $result=$conn->query("SHOW TABLES LIKE 'account';");
    if ($result->num_rows == 0) {
        $sql="CREATE TABLE `account`(
            `id` int(8) UNSIGNED UNIQUE NOT NULL AUTO_INCREMENT,
            `username` varchar(256) DEFAULT NULL,
            `password` varchar(256) DEFAULT NULL,
            `firstname` varchar(256) DEFAULT NULL,
            `lastname` varchar(256) DEFAULT NULL,
            `email` varchar(256) DEFAULT NULL,
            PRIMARY KEY(`id`)
        )";
        if(!$conn->query($sql)){
            echo "Error creating table account";
        }
        

        if(!$conn->query("INSERT INTO `account` (`username`, `password`,`firstname`,`lastname`,`email`) VALUES('a',md5('a'),'Leo','Liang','leoliangziao@gmail.com');")){
            echo "Failed creating sample account";
        }
    }

    $sql = "CREATE TABLE IF NOT EXISTS User(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        firstName varchar(256) not null,
        lastName varchar(256) not null,
        email varchar(256) not null,
        pwd varchar(256) not null,
        role varchar (256) not null
    );";
    $conn->query($sql);

    $sql = "CREATE TABLE IF NOT EXISTS Customer(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        firstName varchar(256) not null,
        lastName varchar(256) not null,
        email varchar(256) not null,
        streetAddress varchar(256) not null,
        cityAddress varchar(256) not null,
        zipCodeAddress varchar(256) not null,
        countryAddress varchar(256) not null
    );";
    $conn->query($sql);
    //INSERT INTO `Customer`( `firstName`, `lastName`, `email`, `streetAddress`, `cityAddress`, `zipCodeAddress`, `countryAddress`) VALUES ("Connie", "Tang", "kourtneytg@gmail.com", "3 Fairholme Avenue, Epsom", "Auckland", "1023", "New Zealand")

    // $sql = "CREATE TABLE IF NOT EXISTS MembershipLevel(
    //     id int(11) AUTO_INCREMENT PRIMARY KEY not null,
    //     name varchar(256) not null,
    //     description varchar(256),
    //     rewards int(11) not null
    // );";
    // $conn->query($sql); 

    //INSERT INTO `MembershipLevel`(`name`, `description`, `rewards`) VALUES ("Bronze", null, 500);
    //INSERT INTO `MembershipLevel`(`name`, `description`, `rewards`) VALUES ("Medal", null, 500);
    //INSERT INTO `MembershipLevel`(`name`, `description`, `rewards`) VALUES ("Gold", null, 500);

    $sql = "CREATE TABLE IF NOT EXISTS Membership(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        dateJoin date not null,
        memberId int(11)not null,
        points int(11) not null,
        FOREIGN KEY(memberId) REFERENCES Customer(id)    
    );";
    $conn->query($sql); 

    $sql = "CREATE TABLE IF NOT EXISTS MenuCategory(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        name varchar(256) not null,
        description varchar(256)
        
    )";
    $conn->query($sql); 

    $sql = "CREATE TABLE IF NOT EXISTS Product(
         id int(11) AUTO_INCREMENT PRIMARY KEY not null,
         categoryId int(11) not null,
         name varchar(256) not null,
         description varchar(256),
         image varchar(256),
         FOREIGN KEY(categoryId) REFERENCES MenuCategory(id)    
    )";
    $conn->query($sql); 
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Coffee", null)
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Milk Tea", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Fresh Tea", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Specialty", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Bean Lovers", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Tea Latte", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Milk Foam", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Brown Sugar", null);
    // INSERT INTO `MenuCategory`(`name`, `description`) VALUES ("Winter Melon", null);

//image not decided yet

    $sql = "CREATE TABLE IF NOT EXISTS Attribute(
         id int(11) AUTO_INCREMENT PRIMARY KEY not null,
         name varchar(256) not null,
         categoryId int(11) not null,
         FOREIGN KEY(categoryId) REFERENCES MenuCategory(id)    
    )";
    $conn->query($sql); 

    $sql = "CREATE TABLE IF NOT EXISTS ProductAttribute(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        productId int(11) not null,
        attributeId int(11) not null,
        description varchar(256) not null,
        cost int(11) not null,

        FOREIGN KEY(productId) REFERENCES Product(id),   
        FOREIGN KEY(attributeId) REFERENCES Attribute(id)
   )";
   $conn->query($sql); 


   $sql = "CREATE TABLE IF NOT EXISTS OrderTracking(
       id int(11) AUTO_INCREMENT PRIMARY KEY not null,
       customerId int(11),
       price int(11) not null,
       operatorId int(11) not null,
       dateTime datetime not null,
       pointsUsed int(11) not null,
       tableNo int(11),
       FOREIGN KEY(customerId) REFERENCES Customer(id),
       FOREIGN KEY(operatorId) REFERENCES User(id)

    )";
    $conn->query($sql); 

    $sql = "CREATE TABLE IF NOT EXISTS ProductOrder(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        orderId int(11) not null,
        productId int(11) not null,
        quantity int(11) not null,
        price int(11) not null,

        FOREIGN KEY(orderId) REFERENCES OrderTracking(id),
        FOREIGN KEY(productId) REFERENCES Product(id)
     )";
     $conn->query($sql); 


     $sql = "CREATE TABLE IF NOT EXISTS ProductOrderAttribute(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        productAttributeId int(11) not null,
        productOrderId int(11) not null,

        FOREIGN KEY(productAttributeId) REFERENCES ProductAttribute(id),
        FOREIGN KEY(productOrderId) REFERENCES ProductOrder(id)
     )";
     $conn->query($sql); 

     //need to delete ordertracking, productorder
     $sql = "CREATE TABLE IF NOT EXISTS Orders(
        id int(11) AUTO_INCREMENT PRIMARY KEY not null,
        customerId int(11),
        operatorId int(11) not null,
        dateTime datetime not null,
        pointsUsed int(11) not null,
        tableNo int(11),

       FOREIGN KEY(customerId) REFERENCES Customer(id),
       FOREIGN KEY(operatorId) REFERENCES User(id)
     )";
     $conn->query($sql); 

     $sql = "CREATE TABLE IF NOT EXISTS OrderLines(
        orderId int(11) not null,
        productAttributeId int(11) not null,

        PRIMARY KEY(orderId, productAttributeId),
       FOREIGN KEY(OrderId) REFERENCES Orders(id),
       FOREIGN KEY(ProductAttributeId) REFERENCES ProductAttribute(id)
     )";
     $conn->query($sql); 
    //INSERT INTO `OrderLines` (`orderId`, `productId`, `productAttributeId`) VALUES ('1', '1', '1'), ('1', '1', '2');




    //  $sql = "CREATE TABLE IF NOT EXISTS Product(
    //     id int(11) AUTO_INCREMENT PRIMARY KEY not null,
    //  )";
    //  $conn->query($sql); 

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
    // $numOfRows = mysqli_num_rows($result);
    if($result){
        echo "Deleted!";
    }else{
        echo mysqli_error($GLOBALS["conn"]);
    }
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




