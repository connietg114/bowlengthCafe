<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';
?>
<!DOCTYPE html>
<html>
    <body>
        <h1>Members</h1>
        <div class="w3-container container"> 
        <table class="membersCustomers">
            <th>No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date Join</th>
            <th>Points</th>
            <th>Delete</th>
            <th>Edit</th>
        </table>    
        </div>
    </body>
</html>
<tr>
<script>
    renderCustomers(getCustomers());

    function deletedata(id, table){
        console.log("member: deletedata()");
        $.post("members/delete.php", {id: id, table: table}, message =>{
            if(jQuery.parseJSON(message).status=="success"){
                console.log("member: deletdata(message: success!)");
                $(".row"+id).html("");
            }
        })
    }

    function renderCustomers(array){
        // console.log("members.php: array")
        // console.log(array);
        $.map(array, function(value, index){
            $(".membersCustomers").append("<tr>" +
                "<td>" + (index + 1) + "</td>" +
                "<td onclick='navigateToDetails("+'"member",'+value.id +")'>"+ value.id + "</td>" +
                "<td onclick='navigateToDetails("+'"member",'+value.id +")'>"+  value.name + "</td>" +
                "<td onclick='navigateToDetails("+'"member",'+value.id +")'>"+  value.email + "</td>" +
                "<td onclick='navigateToDetails("+'"member",'+value.id +")'>"+  value.address+"</td>" +
                "<td onclick='navigateToDetails("+'"member",'+value.id +")'>"+  (value.dateJoin || '-')+ "</td>" +
                "<td onclick='navigateToDetails("+'"member",'+value.id +")'>"+  (value.points || '-')+ "</td>" +
                "<td><i class='fa fa-trash delete'"+"></i>"+"</td>"+
                "<td><i class='fa fa-pen'></i>" + "</td>"+ 
                "</tr>");
            // var rows_html = "<tr class='row"+value.id+"'><td>"+value.id+"</td><td>"+value.firstName+" "+value.lastName+"</td><td>"+value.email+"</td><td>"+value.streetAddress+" "+value.cityAddress+" "+value.zipCodeAddress+" "+value.countryAddress+"</td><td>"+value.memberId+"</td><td>"+value.dateJoin+"</td><td>"+value.points+"</td>"+"<td class = 'deleteCol'><i class='fa fa-trash delete' id='"+value.id +"' table='Customer'"+"></i>"+"</td>"+"<td class = 'editCol' onclick='edit()'><i class='fa fa-pen'></i>" + "</td>"+ "</tr>";

            // $(".membersCustomers").append(rows_html);
        });
    }

    $(".delete").on('click', function(){
        var id = this.id;
        var table = $(".delete").attr("table");
        console.log('members: $(".delete").attr("table"): '+table);
        deletedata(id, table);
    });
    function edit(){
        console.log("edit");
    }

</script>