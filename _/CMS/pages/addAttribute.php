<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Add Attribute</h1>
        <hr>
        <span class="addAttributeErrorMessage" style="color:red"></span>
        <br>
        <label>Name: </label>
        <input type="text" pattern="[A-Za-z0-9]"class="addAttributeNameInput"></input>
        <br><br>
        <label>Category: </label>
            <select class="categoryList">
                <!-- <option value=""></option> -->
            </select>

        <br><br>
        <button onclick="addAttribute()">Submit</button>
    </body>
</html>
<script>
    function addAttribute(){

    }

</script>