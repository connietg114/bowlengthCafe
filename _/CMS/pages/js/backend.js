window.onload = function() {
    var url = window.location.href;

    console.log("url : " + url);
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
            }else if(splitStr[0] == "categoryEdit"){
                $(".main").load("categoryEdit.php", function() {
                    renderCategoryEdit(splitStr[1]);
                });
            }else if(splitStr[0] =="products"){
                $(".main").load(splitStr[0] + ".php", function() {
                    var id = $("." + splitStr[1]).attr("id");
                    if(splitStr[1]=="All"){
                        id=0;
                    }
                    $(".productsItems").html("<table categoryId=0><th>ID</th><th>Name</th><th>Description</th><th>Image</th><th>Delete</th><th>Edit</th></table>");
                    $(".productsItems").attr("categoryId", id);
                    renderProducts(getProducts(), id);

                });
            }

        } else {
            $(".main").load(lastIndexStr + ".php", function() {
                $.map(getMenuCategory(), function(value, index){
                    $(".categoryList").append("<option value='" + value.name + "'>" + value.name + "</option>")   
                })
            });
        }
    } else {
        $(".main").load("home.php");
    }

}


function showPage(url) {
    window.location.href = url;
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

function renderProducts(array, id){
    // console.log(array);
    $.map(array, function(value, index){
        if(id!= 0){
            if(value.categoryId==id){
                mapProducts(value);
            }
        }else{
            mapProducts(value);  
        }
    })
}

function mapProducts(value){
    $(".productsItems").append("<tr>" + 
            "<td onclick='navigateToDetails("+value.id +")'>"+ value.id +"</td>" + 
            "<td onclick='navigateToDetails("+value.id +")'>"+ value.name + "</td>" + 
            "<td onclick='navigateToDetails("+value.id +")'>"+ (value.description || "-") + "</td>" + 
            "<td onclick='navigateToDetails("+value.id +")'>"+ (value.image || "-") + "</td>"+ 
            "<td onclick='deleteProduct()'><i class='fa fa-trash'></i>" + "</td>"
            +  "<td><i onclick='editProduct("+value.id+")' class='fa fa-pen'></i>" + "</td>" +
            "</tr>");
}
function deleteProduct(){
    // console.log("delete");
}
function editProduct(id){
    showPage("?productEdit/"+id);
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
    $(".productDetailsEditButton").attr("onclick", 'editProduct('+product.id+')');
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
    // console.log(product);
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
    console.log(product);
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

// var productPriceArray;
function UpdateProduct(){
    var name = $(".productEditName").val();
    var category = $(".productEditCategory").val();
    var categoryId = getMenuCategory().filter(cat => cat.name == category)[0].id;
    // productPriceArray+=...;

    var desc = $(".productEditDescription").val();
    if (!name.match(/^[a-zA-Z ]*$/)){
        $(".errorMessage").text("Name has to be letters.");
    }else if(name.length == 0){
        $(".errorMessage").text("Name cannot be empty.");
    }
    else if(!desc.match(/^[a-zA-Z0-9 ]*$/)){
        $(".errorMessage").text("Description can only be letters & numbers.");
    }else{
        $(".errorMessage").text();
        postProduct(name, categoryId, desc);
    }
    
   

    var test;
    var table = document.getElementById("productEditPriceList");
    // const regex = /^[a-zA-Z0-9]*$/;
    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 1, col; col = row.cells[j]; j++) {
            if(j==1 || j==2 || j==3){
            test= col.firstChild.value;
            console.log(test);
            }
        }  
    }
    
    // console.log("name: "+ name);
    // console.log("category: " + category);
    // console.log($(".productEditDescription").val());
}

function postProduct(name, categoryId, description){
    var dataReturn;
    $.ajax({
        type: 'POST',
        url: "products/edit.php",
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
///////////////////// Add Product Page //////////////////
// alert($(".addProductCategory"));
// $.map(getMenuCategory(), function(value, index){
//     $(".addProductCategory").append("<option value='" + value.name + "'>" + value.name + "</option>")   
// })
///////////////////////////////////////Orders Page//////////////////////////////////////////////////////////////////
// getOrders();
function getOrders(){
    var dataReturn = {};
    $.ajax({
        type: 'POST',
        url: "orders/get.php",
        data: { table: "OrderTracking" },
        success: function(items) {
            console.log(items);
            dataReturn = jQuery.parseJSON(items);
        },
        async: false
    });
    return dataReturn;
}

function renderOrders(){
    $.map(getOrders(), function(value, index) {
        $(".orderDetails").append("<tr>" +
            "<td>" + (index + 1) + "</td>" +
            "<td>" + value.id + "</td>" +
            "<td>" + value.customerId + "</td>" +
            "<td>" + value.price + "</td>" +
            "<td>" + value.operatorId + "</td>" +
            "<td>" + value.dateTime + "</td>" +
            "<td>" + value.pointsUsed + "</td>" +
            "<td>" + value.tableNo + "</td>" +
            "</tr>")
    })
}
////////////////////////////////////Category Edit Page//////////////////////////////////////////////////
function renderCategoryEdit(id){
    var category= getMenuCategory().filter(category => category.id == id)[0];
    console.log(category);
    $(".categoryEditNameInput").attr("value", category.name);
    $(".categoryEditDescriptionInput").attr("value", category.description);
}

function editCategory(){
    var name = $(".categoryEditNameInput").val();
    var description = $(".categoryEditDescriptionInput").val();
    var arr = window.location.href.split("/")
    var id = arr[arr.length-1];

    if (!name.match(/^[a-zA-Z ]*$/)){
        $(".categoryEditErrorMessage").text("Name has to be letters.");
    }else if(name.length == 0){
        $(".categoryEditErrorMessage").text("Name cannot be empty.");
    }
    else if(!description.match(/^[a-zA-Z0-9 ]*$/)){
        $(".categoryEditErrorMessage").text("Description can only be letters & numbers.");
    }else{
        $(".categoryEditErrorMessage").text();
        $.ajax({
            type: 'POST',
            url: "categories/edit.php",
            data: {id:id, name:name, description:description },
            success: function(items) {
                if(jQuery.parseJSON(items).status!="success"){
                    alert("Fail to edit category with ID=" + id);//this is not coming out!
                }else{
                    alert("Category "+ id + " has been edited.");
                }
                // dataReturn = jQuery.parseJSON(items);
            },
            async: false
        });
    }   
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