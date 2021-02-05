<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Products</h1>
        <div class="w3-container container"> 
            <br>
            <div class="buttonGroup">
                <button onclick="showPage('?products/All')">All</button>
            </div>
            <br>
            <table class="productsItems" categoryId="1">
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Delete</th>
                <th>Edit</th>
            </table>
            <br>
            <button style="float:right" onclick="showPage('?addProduct')">Add Product</button>
            <br><br>
        </div>
    </body>
</html>

<script>
    $.map(getMenuCategory(), function(value, index){
        var className = value.name.replace(" ", "");
        $(".buttonGroup").append("<button style='margin:5px' class='"+ className+"'onclick="+ '"showPage('+"'?products/"+ className+"')"+'" '+ " id="+ "'"+value.id + "'" +">"+ value.name+"</button> ");
    })

    renderProducts(getProducts(), 0);
    function changeCategoryId(id){
        // showPage("?products/" + )
        $(".productsItems").html("<table categoryId=0><th>ID</th><th>Name</th><th>Description</th><th>Image</th><th>Delete</th><th>Edit</th></table>");
        $(".productsItems").attr("categoryId", id);
        renderProducts(getProducts(), id);
    }

    

    

</script>
