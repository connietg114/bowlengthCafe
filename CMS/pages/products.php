<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="css/backend.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
        <script src="js/backend.js"></script>
    </head>
    
    <body>
        <h1>Products</h1>
        <div class="w3-container container"> 
            <br>
            <div class="buttonGroup"></div>
            <br>
            <table class="productsItems">
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
            </table>
            <br>
        </div>
    </body>
</html>

<script>
    getProducts();
    function getProducts(){
        var dataReturn;
        $.ajax({
            type: 'POST',
            url: "products/get.php",
            data: {table: "Product"},
            success: function (items){
                // console.log(items);
                // dataReturn = items;
                dataReturn = jQuery.parseJSON(items);
            },
            async:false   
        });
        return dataReturn;
    }
    $.map(getMenuCategory(), function(value, index){
        $(".buttonGroup").append("<button"+ " id="+ "'"+value.id + "'" +">"+ value.name+"</button> ");
       
        // $(".productsItems").append("<tr>" + "<td>"+ value.id +"</td>" + "<td>"+value.name + "</td>" + "</tr>");

    })
    

    console.log(getMenuCategory());
    function getMenuCategory(){
        var dataReturn;
        $.ajax({
            type: 'POST',
            url: "products/getMenuCategory.php",
            data: {table: "MenuCategory"},
            success: function (items){
                // console.log(items);
                // dataReturn = items;
                dataReturn = jQuery.parseJSON(items);
            },
            async:false   
        });
        return dataReturn;
    }
    

</script>
