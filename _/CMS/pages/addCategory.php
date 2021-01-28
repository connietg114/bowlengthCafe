<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Add Category</h1>
        <hr>
        <label>Name: </label>
        <input class="addCategoryNameInput"></input>
        <br><br>
        <label>Description</label>
        <input class="addCategoryDescriptionInput"></input>

        <br><br>
        <button onclick="addCategory()">Submit</button>
    </body>
</html>

<script>
    function addCategory(){
        var name = $(".addCategoryNameInput").val();
        var desc = $(".addCategoryDescriptionInput").val();

        var dataReturn;
        $.ajax({
            type: 'POST',
            url: "addCategory/post.php",
            data: {name:name, description:desc },
            success: function(items) {
                dataReturn = jQuery.parseJSON(items);
                if(dataReturn.status=="success"){
                    alert("Category "+name+" has been added." );
                    window.history.back();
                }else{
                    alert("something's wrong");
                }
                // console.log(dataReturn.status);
            },
            async: false
        });
        
        return dataReturn;
    }
</script>