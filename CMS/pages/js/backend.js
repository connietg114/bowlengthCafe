window.onload= function(){
    var url = window.location.href;
    // console.log("url : " + url);
    if (url.includes("?")) {
        var str = url.split("?");
        var lastIndexStr = str[str.length - 1];
        // console.log(lastIndexStr);
        if (lastIndexStr.includes("/")) {
            var splitStr = lastIndexStr.split("/");
            if(splitStr[0]=="productDetails"){
                $(".main").load(splitStr[0]+".php", function(){
                    renderProductDetails(splitStr[1]);
                });
            }else if(splitStr[0]=="productEdit"){
                $(".main").load(splitStr[0]+".php", function(){
                    // renderProductDetails(splitStr[1]);
                });
            }
            
        }
        else{
            $(".main").load(lastIndexStr + ".php", function(){

            });
        }
    }else{
        $(".main").load("home.php");
    }

}
function showPage(url){
    window.location.href = url;
    // $(".main").load(url);
}
function navigateToDetails(id){
    showPage("?productDetails/" + id);
}
///////////////////////////////// Products Page /////////////////////////////////////////////////////////////////////////
// getProducts();
function getProducts(){
    var dataReturn = {};
    $.ajax({
        type: 'POST',
        url: "products/get.php",
        data: {table: "Product"},
        success: function (items){
            // console.log(items);
            dataReturn = jQuery.parseJSON(items);
        },
        async:false   
    });
    return dataReturn;
}

function getMenuCategory(){
    var dataReturn;
    $.ajax({
        type: 'POST',
        url: "products/getMenuCategory.php",
        data: {table: "MenuCategory"},
        success: function (items){
            // console.log(items);
            dataReturn = jQuery.parseJSON(items);
        },
        async:false   
    });
    return dataReturn;
}
//////////////////////////////////// Product Details Page//////////////////////////////////////////////////////////////////////
function renderProductDetails(id){
    // console.log(getProducts());
    var product = getProducts().filter(product=>product.id==id)[0];
    
    $(".productDetails").html("<h4 class='productName'>"+product.categoryName + ": "+ product.name+"</h4>"+
                                "<p> ID: " + product.id +  "</p>"+
                                // "<p> Category: "+product.categoryName+"</p>"+
                                "<p> Category ID: "+product.categoryId+"</p>"+
                                "<p> Description: "+(product.description || "")+"</p>"+
                                "<p> Image: "+ (product.image || "")+"</p>");
    
    $.map(getProductPriceList(id), function(value, index){
        $(".productDetailsPriceList").append("<tr>"+
        "<td>" + (index+1) + "</td>"+
        "<td>" + value.name + "</td>"+
        "<td>" + value.description + "</td>"+
        "<td>" + value.cost + "</td>"+
        "</tr>")
    })
    
}

function getProductPriceList(id){
    var dataReturn = {};
    $.ajax({
        type: 'POST',
        url: "productDetails/get.php",
        data: {table: "ProductAttribute", productId:id},
        success: function (items){
            console.log(items);
            dataReturn = jQuery.parseJSON(items);
        },
        async:false   
    });
    return dataReturn;
    //productDetailsPriceList
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////
const openFeature = page => {
    const pageContainer = document.getElementsByClassName("main")[0];
    const url = "feature/widgEditor/" + page + ".htm";
    $.get(url, function(data, status) {
        pageContainer.innerHTML = data;
        widgInit();
    });

};

