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
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Street</th>
            <th>City</th>
            <th>Zip code</th>
            <th>Country</th>
        </table>    
        </div>
    </body>
</html>
<script>
    renderCustomers(getCustomers());
    function renderCustomers(array){
        console.log("members.php: array");
        console.log(array);
    //     $.map(array, function(value, index){
    //         $(".membersCustomers").html("<table")
    //     })
    }

</script>