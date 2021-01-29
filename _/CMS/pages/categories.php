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
                <td>No.</td>
                <td>ID</td>
                <td>Name</td>
                <td>Description</td>
                <td>Delete</td>
                <td>Edit</td>
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
                console.log(items);
                dataReturn = jQuery.parseJSON(items);
            },
            async: false
        });
        return dataReturn;
    }

    function renderCategories(){
        $.map(getCategories(), function(value, index) {
            $(".categoriesTable").append("<tr>" +
            "<td>" + (index + 1) + "</td>" +
            "<td>" + value.id + "</td>" +
            "<td>" + value.name + "</td>" +
            "<td>" + (value.description || "-")  + "</td>" +
            "<td><i class='fa fa-trash'></i>" + "</td>"+
            "<td><i class='fa fa-pen'></i>" + "</td>" +
            "</tr>")
        })
    }
</script>