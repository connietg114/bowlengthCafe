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
        <span class="categoryEditErrorMessage" style="color:red"></span>
        <br>
        <label>Name: </label>
        <input type="text" pattern="[A-Za-z0-9]" value='' class="categoryEditNameInput"></input>
        <br><br>
        <label>Description</label>
        <input type="text" pattern="[A-Za-z0-9]" value = ''class="categoryEditDescriptionInput"></input>

        <br><br>
        <button onclick="editCategory()">Submit</button>
    </body>
</html>
<script>

</script>