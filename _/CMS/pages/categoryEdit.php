<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Edit Category</h1>

        <hr>
        <span class="addCategoryErrorMessage" style="color:red"></span>
        <br>
        <label>Name: </label>
        <input type="text" pattern="[A-Za-z0-9]"class="addCategoryNameInput"></input>
        <br><br>
        <label>Description</label>
        <input type="text" pattern="[A-Za-z0-9]" class="addCategoryDescriptionInput"></input>

        <br><br>
        <button onclick="addCategory()">Submit</button>
    </body>
</html>