<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" type="text/css" href="css/backend.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
        <script src="js/backend.js"></script>
    </head>
    
    <body>
        <?php
        // $sql = "select * from users";
        // $result = mysqli_query($conn, $sql);
        // $resultCheck = mysqli_num_rows($result);
        // if($resultCheck>0){
        //     while($row=mysqli_fetch_assoc($result)){
        //         echo $row["Id"].' '.$row["FirstName"] .' '. $row["LastName"] . ' '. $row["Email"].' '. $row["Uid"].' '. $row["Password"]."<br>";
        //     }
        // }

        // updateData("firstName = 'connie'", "users", 2);

        ?>
        <div class="sidenav">
            <a onclick="showPage('home.php')">Home</a>
            <a href="#">Members</a>
            <a onclick="showPage('orders.php')">Orders</a>
            <a onclick="showPage('products.php')">Products</a>
            <a href="#">Lost/Found</a>
            <a href="#">Events</a>
            <a href="#">Profile</a>
            <a href="#">Log Out</a>
        </div>

        <div class="main">
            <h2>Home</h2>
            <hr>
            <table class="showMembers">
            </table>

        </div>
    </body>
</html>
<script>
    window.onload= function(){
        showPage('home.php');
    }
    function showPage(url){
        $(".main").load(url);
    }
</script>