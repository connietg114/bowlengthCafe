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
                <button onclick="changeCategoryId(0)">All</button>
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
        </div>
    </body>
</html>

<script>
    $.map(getMenuCategory(), function(value, index){
        $(".buttonGroup").append("<button onclick="+ '"changeCategoryId(' + value.id +')" '+ " id="+ "'"+value.id + "'" +">"+ value.name+"</button> ");
    })

    renderProducts(getProducts(), 0);
    function changeCategoryId(id){
        $(".productsItems").html("<table categoryId=0><th>ID</th><th>Name</th><th>Description</th><th>Image</th><th>Delete</th><th>Edit</th></table>");
        $(".productsItems").attr("categoryId", id);
        renderProducts(getProducts(), id);
    }

    function renderProducts(array, id){
        // console.log(array);
        $.map(array, function(value, index){
            if(id!= 0){
                if(value.categoryId==id){
                    $(".productsItems").append("<tr onclick='navigateToDetails("+value.id +")'>" + 
                    "<td>"+ value.id +"</td>" + 
                    "<td>"+value.name + "</td>" + 
                    "<td>"+ (value.description || "-") + "</td>" + 
                    "<td>"+ (value.image || "-") + "</td>"+ 
                    "<td onclick='deleteProduct()'><i class='fa fa-trash'></i>" + "</td>"
                    +  "<td><i class='fa fa-pen'></i>" + "</td>" +
                    "</tr>");
                }
            }else{
                $(".productsItems").append("<tr>" + 
                "<td onclick='navigateToDetails("+value.id +")'>"+ value.id +"</td>" + 
                "<td onclick='navigateToDetails("+value.id +")'>"+ value.name + "</td>" + 
                "<td onclick='navigateToDetails("+value.id +")'>"+ (value.description || "-") + "</td>" + 
                "<td onclick='navigateToDetails("+value.id +")'>"+ (value.image || "-") + "</td>"+ 
                "<td onclick='deleteProduct()'><i class='fa fa-trash'></i>" + "</td>"
                +  "<td><i onclick='editProduct("+value.id+")' class='fa fa-pen'></i>" + "</td>" +
                "</tr>");
            }
        })
    }
    function deleteProduct(){
        // console.log("delete");
    }
    function editProduct(id){
        showPage("?productEdit/"+id);
    }

    

</script>