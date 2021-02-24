<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Categories</h1>
        <div class="w3-container container">
           
            <br>
            <table class="categoriesTable">
                <th>No.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
                <th>Edit</th>
            </table>
            <br>
            <button style="float:right" onclick="showPage('?addCategory')">Add Category</button>
            <br><br>
            
        </div>
    </body>
</html>

<script>
    renderCategories();

    function getCategories(){
        var dataReturn = {};
        $.ajax({
            type: 'POST',
            url: "categories/get.php",
            data: { table: "MenuCategory" },
            success: function(items) {
                // console.log(items);
                dataReturn = jQuery.parseJSON(items);
            },
            async: false
        });
        return dataReturn;
    }

    function renderCategories(){
        $.map(getCategories(), function(value, index) {
            $(".categoriesTable").append("<tr class='categoryRow"+value.id+ "'>" +
            "<td>" + (index + 1) + "</td>" +
            "<td>" + value.id + "</td>" +
            "<td>" + value.name + "</td>" +
            "<td>" + (value.description || "-")  + "</td>" +
            "<td><i onclick ='deleteCategory("+value.id+")'class='fa fa-trash'></i>" + "</td>"+
            "<td><i onclick= 'editCategory("+value.id+")' class='fa fa-pen'></i>" + "</td>" +
            "</tr>")
        })
    }
    function editCategory(id){
        showPage("?categoryEdit/"+id);
    }

    function deleteCategory(id){
        var r = confirm("Are you sure you want to delete Category " + id + "? ");
        if (r==true){
            var dataReturn;
            $.ajax({
                type: 'POST',
                url: "categories/delete.php",
                data: { id: id },
                success: function(items) {
                    dataReturn = jQuery.parseJSON(items);
                    
                    if(dataReturn.status=="success"){
                        $(".categoryRow"+id).html('');
                    }
                    else{
                        console.log(dataReturn.status);
                        alert("wrong");
                    }

                },
                
                error: function (xhr, status, error) {
                    console.log(status);
                    console.log(error);
                   
                },
                async: false
            }).done(function(result) {
                console.log("Show the result from the PHP in the console", result);
                // Do all you want with the result
            }).fail(function(data) {
                    alert(data);
            });
            
        }  
    }

    
</script>