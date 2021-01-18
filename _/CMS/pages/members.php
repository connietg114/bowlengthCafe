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
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Memberid</th>
            <th>dateJoin</th>
            <th>points</th>
        </table>    
        </div>
    </body>
</html>
<tr>
<script>
    renderCustomers(getCustomers());
    function renderCustomers(array){
        // console.log("members.php: array")
        // console.log(array);
        $.map(array, function(value, index){

            var rows_html = "<tr><td>"+value.id+"</td><td>"+value.firstName+" "+value.lastName+"</td><td>"+value.email+"</td><td>"+value.streetAddress+" "+value.cityAddress+" "+value.zipCodeAddress+" "+value.countryAddress+"</td><td>"+value.memberId+"</td><td>"+value.dateJoin+"</td><td>"+value.points+"</td></tr>";

            $(".membersCustomers").append(rows_html);
        })
    }

</script>