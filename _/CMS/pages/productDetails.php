<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';

?>

<!DOCTYPE html>
<html>
    <body>
        <h1>Product Details</h1>
        <div class="w3-container container">
            <div class="productDetails">

            </div>
           
            <table class="productDetailsPriceList">
                <th>No.</th>
                <th>Attribute <button onclick="showPage('?addAttribute')"><i class='fa fa-plus'></i></button></th>
                <th>Description</th>
                <th>Price</th>
            </table>
            <br>
        </div>

    </body>
</html>

<script>
//     function renderProductDetails(id){
//     var product = getProducts().filter(product=>product.id==id);
//     console.log(product);
//     $(".productDetails").html("<p>" + product.id +  product.categoryId + product.name+ product.description+ product.name + "</p>");
// }

</script>