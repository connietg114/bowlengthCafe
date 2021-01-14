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
            <br>
            <label>Name: </label>
            <input value= "" class="productEditName" ></input><br><br>

            <label>Category: </label>
            <input class="productEditCategory"></input><br><br>

            <label>Description: </label>
            <input class="productEditDescription"></input><br><br>

            <label>Image: </label><br><br>
        </div>

        <table class="productEditPriceList">
            <th>No.</th>
            <th>Attribute</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Add</th>
        </table>
        <br>
        </div>
    </body>
</html>