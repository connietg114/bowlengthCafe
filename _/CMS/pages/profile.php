<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Profile</h1>
        
        <div class="w3-container container"> 
            <br>
            <p>First Name: Zhang</p>
            <p>Last Name: Jian</p>
            <p>Email: zhangJian@gmail.com</p>
            <p>Phone: 0212345678</p>
            <button style="float:right">Edit <i class="fa fa-pen"></i></button>
            <br><br>
        </div>
    </body>
</html>