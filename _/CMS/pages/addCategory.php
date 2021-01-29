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

<script>
    function addCategory(){
        var name = $(".addCategoryNameInput").val();
        var desc = $(".addCategoryDescriptionInput").val();

        if (!name.match(/^[a-zA-Z ]*$/)){
            $(".addCategoryErrorMessage").text("Name has to be letters.");
        }else if(name.length == 0){
            $(".addCategoryErrorMessage").text("Name cannot be empty.");
        }
        else if(!desc.match(/^[a-zA-Z0-9 ]*$/)){
            $(".addCategoryErrorMessage").text("Description can only be letters & numbers.");
        }else{
            $(".addCategoryErrorMessage").text();

           
            $.ajax({
                type: 'POST',
                url: "categories/post.php",
                data: {name:name, description:desc },
                success: function(items) {
                    // console.log(items);
                    dataReturn = jQuery.parseJSON(items);
                    if(dataReturn.status=="success"){
                        alert("Category "+name+" has been added." );
                        // window.history.back();
                    }else{
                        alert("something's wrong");
                    }
                    // console.log(dataReturn.status);
                },
                async: false
            });
        }
        
       
    }
</script>