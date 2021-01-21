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
            <select class="productEditCategory">
                <!-- <option value=""></option> -->
            </select>
            <button title = "Add More Category" > 
                <i class='fa fa-plus'></i></button>
            <br><br>

            <label>Description: </label>
            <input class="productEditDescription"></input><br><br>

            <label>Image: </label><br><br>
        </div>

        <table class="productEditPriceList" id="productEditPriceList">
            <th>No.</th>
            <th>Attribute</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Add</th>
        </table>
        <br>
        <button style="float:right" onclick="UpdateProduct()">Submit</button>
        <br><br>
        </div>
    </body>
</html>