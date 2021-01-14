<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Edit Product</h1>
        <div class="w3-container container"> 
        <div class="productDetails">
            <p>Name: </p><input></input>
            <p>Category: </p><input></input>
            <p>Description: </p><input></input>
            <p>Image: </p>
        </div>

        <table class="productDetailsPriceList">
            <th>No.</th>
            <th>Attribute</th>
            <th>Description</th>
            <th>Price</th>
        </table>
        <br>
        </div>
    </body>
</html>