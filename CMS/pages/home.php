<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';

?>


<!DOCTYPE html>
<html>
    <h2>Home</h2>
    <hr>
    <table class="showMembers">
    </table>
</html>
<script>
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
                dataReturn = jQuery.parseJSON(items);
                // console.log(dataReturn);
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
                "<td>" + (value.role || "") + "</td>" +
                "<td class = 'deleteCol'><i class='fa fa-trash delete' id="+value.id + " table = " + "'users'"+ "></i>" + "</td>"
                +  "<td class = 'editCol' onclick='edit()'><i class='fa fa-pen'></i>" + "</td>"+ 
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
</script>
