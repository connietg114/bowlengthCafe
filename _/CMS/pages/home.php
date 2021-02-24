<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';

?>


<!DOCTYPE html>
<html>
    <body>
        <h2>Home</h2>
        <div class="w3-container container"> 
            <h4>Recent Orders</h4>
            <table class="orders">
            <th>No.</th>
            <th>ID</th>
            <th>Customer</th>
            <th>Operator</th>
            <th>Date & Time</th>
            <th>Points used</th>
            <th>Table No.</th>
            <th>Delete</th>
            <th>Edit</th>
            </table>

            
            <br>
        </div>    
    </body>
</html>
<script>
    renderOrders('2021-01-01 00:00:00');
    
</script>
