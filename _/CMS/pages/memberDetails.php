<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Member Details</h1>
        <div class="w3-container container"> 
            <p id="memberDetailsId">ID: </p>
            <p id="memberDetailsName">Name: </p>
            <p id="memberDetailsEmail">Email: </p>
            <p id="memberDetailsAddress">Address: </p>
            <p id="memberDetailsDateJoin">Date Join: </p>
            <p id="memberDetailsPoints">Points: </p>
            <br>
            <h4>Orders</h4>
        </div>

        
    </body>
</html>
