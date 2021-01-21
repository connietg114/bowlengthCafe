console.log(window.location.href);

window.onload = function() {
    var url = window.location.href;


    // console.log("url : " + url);
    if (url.includes("?")) {
        var str = url.split("?");
        var lastIndexStr = str[str.length - 1];
        // console.log(lastIndexStr);
        if (lastIndexStr.includes("/")) {
            var splitStr = lastIndexStr.split("/");
            if (splitStr[0] == "productDetails") {
                $(".main").load(splitStr[0] + ".php", function() {
                    renderProductDetails(splitStr[1]);
                });
            } else if (splitStr[0] == "productEdit") {
                $(".main").load(splitStr[0] + ".php", function() {
                    renderProductEdit(splitStr[1]);
                });
            }

        } else {
            $(".main").load(lastIndexStr + ".php", function() {

            });
        }
    } else {
        $(".main").load("home.php");
    }

}

function showPage(url) {
    window.location.href = url;
    // $(".main").load(url);
}

function navigateToDetails(id) {
    showPage("?productDetails/" + id);
}
///////////////////////////////// Products Page /////////////////////////////////////////////////////////////////////////

// getProducts();
function getProducts() {
    var dataReturn = {};
    $.ajax({
        type: 'POST',
        url: "products/get.php",
        data: { table: "Product" },
        success: function(items) {
            // console.log("getProducts(): " + items);
            dataReturn = jQuery.parseJSON(items);
        },
        async: false
    });
    return dataReturn;
}
//////////////////////////// Members Page //////////////////////////////////////////////////////////////////////

function getCustomers() {
    var dataReturn = {};
    $.ajax({
        type: 'POST',
        url: "members/get.php",
        data: { table: "Customer" },
        success: function(items) {
            // console.log(items);
            dataReturn = jQuery.parseJSON(items);
            console.log("JSON: ");
            console.log(dataReturn);
        },
        async: false
    });
    return dataReturn;
}


function getMenuCategory() {
    var dataReturn;
    $.ajax({
        type: 'POST',
        url: "products/getMenuCategory.php",
        data: { table: "MenuCategory" },
        success: function(items) {
            console.log(items);
            dataReturn = jQuery.parseJSON(items);
        },
        async: false
    });
    return dataReturn;
}
//////////////////////////////////// Product Details Page//////////////////////////////////////////////////////////////////////
function renderProductDetails(id) {
    // console.log(getProducts());
    var product = getProducts().filter(product => product.id == id)[0];

    $(".productDetails").html("<h4 class='productName'>" + product.categoryName + ": " + product.name + "</h4>" +
        "<p> ID: " + product.id + "</p>" +
        // "<p> Category: "+product.categoryName+"</p>"+
        "<p> Category ID: " + product.categoryId + "</p>" +
        "<p> Description: " + (product.description || "") + "</p>" +
        "<p> Image: " + (product.image || "") + "</p>");

    $.map(getProductPriceList(id), function(value, index) {
        $(".productDetailsPriceList").append("<tr>" +
            "<td>" + (index + 1) + "</td>" +
            "<td>" + value.name + "</td>" +
            "<td>" + value.description + "</td>" +
            "<td>" + value.cost + "</td>" +
            "</tr>")
    })

}

function getProductPriceList(id) {
    var dataReturn = {};
    $.ajax({
        type: 'POST',
        url: "productDetails/get.php",
        data: { table: "ProductAttribute", productId: id },
        success: function(items) {
            // console.log(items);
            dataReturn = jQuery.parseJSON(items);
        },
        async: false
    });
    return dataReturn;
    //productDetailsPriceList
}
//////////////////////////////////////Product Edit Page////////////////////////////////////////////////////////////////////
var productEditNum;
function renderProductEdit(id) {
    var product = getProducts().filter(product => product.id == id)[0];
    $(".productEditName").attr("value", product.name);
    $(".productEditCategory").append("<option value = '"+product.categoryName + "'>"+product.categoryName+ "</option");
    $.map(getMenuCategory(), function(value, index){
        if(value.name != product.categoryName){
            $(".productEditCategory").append("<option value='" + value.name + "'>" + value.name + "</option>")
        }    
    })
    
    $(".productEditDescription").attr("value", product.description);

    $.map(getProductPriceList(id), function(value, index) {
        productEditNum = index+1;
        $(".productEditPriceList").append("<tr class='productPriceRow'>" +
            "<td>" + (productEditNum) + "</td>" +
            "<td><input value= '" + value.name + "'>" + "</input></td>" +
            "<td><input value= '" + value.description + "'>" + "</input></td>" +
            "<td><input value= '" + value.cost + "'>" + "</input></td>" +
            "<td><i class='fa fa-trash'></i>" + "</td>" +
            "<td><i onclick='addProductEditPriceListRow()' class='fa fa-plus'></i>" + "</td>" +
            "</tr>")
    })
    // console.log(product);
}

function addProductEditPriceListRow() {
    productEditNum += 1;
    $(".productEditPriceList").append("<tr>" +
        "<td>" +productEditNum+ "</td>" +
        "<td><input value= ''></input></td>" +
        "<td><input value= ''></input></td>" +
        "<td><input value= ''></input></td>" +
        "<td><i class='fa fa-trash'></i>" + "</td>" +
        "<td><i onclick='addProductEditPriceListRow()' class='fa fa-plus'></i>" + "</td>" +
        "</tr>")
}


function UpdateProduct(){
    var name = $(".productEditName").val();
    var category = $(".productEditCategory").val();
    var desc = $(".productEditDescription").val();

    var test;
    var table = document.getElementById("productEditPriceList");
    // const regex = /^[a-zA-Z0-9]*$/;
    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 1, col; col = row.cells[j]; j++) {
            if(j==1 || j==2 || j==3){
            test= col.firstChild.value;
            }
        }  
    }
    postProduct(name, category, desc);
    // console.log("name: "+ name);
    // console.log("category: " + category);
    // console.log($(".productEditDescription").val());
}

function postProduct(name, categoryId, description){
    var dataReturn;
    $.ajax({
        type: 'POST',
        url: "products/post.php",
        data: {name:name, categoryId:categoryId, description:description },
        success: function(items) {
            // return items;
            console.log(items);
            // dataReturn = jQuery.parseJSON(items);
        },
        async: false
    });
    return dataReturn;
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