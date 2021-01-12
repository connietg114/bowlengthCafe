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
        <?php
        // $sql = "select * from users";
        // $result = mysqli_query($conn, $sql);
        // $resultCheck = mysqli_num_rows($result);
        // if($resultCheck>0){
        //     while($row=mysqli_fetch_assoc($result)){
        //         echo $row["Id"].' '.$row["FirstName"] .' '. $row["LastName"] . ' '. $row["Email"].' '. $row["Uid"].' '. $row["Password"]."<br>";
        //     }
        // }

        // updateData("firstName = 'connie'", "users", 2);

        ?>
        <div class="sidenav">
            <a href="#">Home</a>
            <a href="#">Members</a>
            <a onclick="showPage('orders.php')">Orders</a>
            <a onclick="showPage('products.php')">Products</a>
            <a href="#">Lost/Found</a>
            <a href="#">Events</a>
            <a href="#">Profile</a>
            <a href="#">Log Out</a>
        </div>

        <div class="main">
            <h2>Home</h2>
            <hr>
            <table class="showMembers">
            </table>

            <?php
            ?>
        </div>
    </body>
</html>
<script>

    function showPage(url){
        $(".main").load(url);
    }
    //  $(function() {
    // renderData(get("users"));
    // });
    // INSERT INTO `users`(`firstName`, `lastName`, `email`, `pwd`, `role`) VALUES ("firstname", "lastname", "email", "password", "role" )
    
    renderData(get("table"));
    function deletedata(id, table){
        $.post("home/delete.php", {id: id, table: table}, message =>{
            if(jQuery.parseJSON(message).status=="success"){
                $(".row"+id).html("");
            }
        })
    }

    function get(table){
        var dataReturn;
        $.ajax({
            type: 'POST',
            url: "home/get.php",
            data: {table: "users"},
            success: function (items){
                // console.log(items);
                // dataReturn = items;
                dataReturn = jQuery.parseJSON(items);
                console.log(dataReturn);
            },
            async:false   
        });
        return dataReturn;
    }
    function renderData(data){
        $(".showMembers").append("<tr><th>No.</th><th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th><th>Role</th><th>Delete</th><th>Edit</th></tr>");
        var array = $.map(data, function(value, index){
            var num = index+1;
            $(".showMembers").append(
                "<tr class='row"+value.id+"'>" +
                "<td>" + num + "</td>"+
                "<td>" + value.id + "</td>"+
                "<td>" + value.firstName + "</td>" + 
                "<td>" + value.lastName + "</td>" + 
                "<td>" + value.email + "</td>" + 
                "<td>" + value.pwd + "</td>" + 
                "<td>" + value.role + "</td>" +
                "<td class = 'deleteCol'><i class='fa fa-trash delete' id="+value.id + " table = " + "'users'"+ "></i>" + "</td>"
                +  "<td class = 'editCol' onclick='edit()'><i class='fa fa-pen edit'></i>" + "</td>"+ 
                "</tr>"
                );
            }) 
    }

    $(".delete").on('click', function(){
        var id = this.id;
        var table = $(".delete").attr("table");
        deletedata(id, table);
    });
    function edit(){
        console.log("edit");
    }

    // $(".edit").on('click', function(){

    // });

</script>