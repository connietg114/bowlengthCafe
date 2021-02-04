<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Add Product</h1>
        <span class="addProductErrorMessage" style="color:red"></span>
        <div class="w3-container container"> 
        <div class="productDetails">
            <br>
            <label>Name: </label>
            <input value= "" class="addProductName" ></input><br><br>

            <label>Category: </label>
            <select class="addProductCategory">
                <!-- <option value=""></option> -->
            </select>

            <button title = "Add More Category" onclick="showPage('?addCategory')"> 
                <i class='fa fa-plus'></i></button>
            <br><br>

            <label>Description: </label>
            <input class="addProductDescription"></input><br><br>

            <label>Image: </label>
            <input type="file"></input>
            <br><br>
        </div>

        <table class="addProductPriceList" id="addProductPriceList">
            <th>No.</th>
            <th>Attribute</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Add</th>
            <tr>
                <td>1</td>
                <td><input></input></td>
                <td><input></input></td>
                <td><input type="number"></input></td>
                <td><i class='fa fa-trash'></i></td>
                <td><i class='fa fa-plus'></i></td>
            </tr>
        </table>
        <br>
        <button style="float:right" onclick="UpdateProduct()">Submit</button>
        <br><br>
        </div>
       
    </body>
</html>
<script>
     $.map(getMenuCategory(), function(value, index){
        $(".addProductCategory").append("<option value='" + value.name + "'>" + value.name + "</option>")   
    })
</script>