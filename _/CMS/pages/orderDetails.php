<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Order Details</h1>
        <div class="w3-container container"> 
            <p id="orderDetailsId">ID: </p>
            <p id="orderDetailsCustomer">Customer: </p>
            <p id="orderDetailsOperator">Operator: </p>
            <p id="orderDetailsDatetime">Date & Time: </p>
            <p id="orderDetailsPoints">Points Used: </p>
            <p id="orderDetailsTable">Table Number: </p>
            <br>

            <p>Products Ordered</p>
            <table class="productsOrdered">
                <th>No.</th>
                <th>Product</th>
                <th>Attribute</th>
                <th>Attribute Description</th>
                <th>Price</th>
            </table>
            <br>
        </div>
    </body>
</html>