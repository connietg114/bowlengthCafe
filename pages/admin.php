<?php
include_once "Includes/dbConnect.php";
require_once dirname(__FILE__).'/Includes/globalVariables.php';
require_once dirname(__FILE__).'/Includes/sqlQuery.php';

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
        <link rel="stylesheet" type="text/css" href="backend.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
        <script src="backend.js"></script>
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

        // deleteData(2, "users");

        // updateData("firstName = 'connie'", "users", 2);

        ?>
        <div class="sidenav">
            <a href="#">Home</a>
            <a href="#">Members</a>
            <a href="#">About</a>
            <a href="#">Settings</a>
            <a href="#">Log Out</a>
        </div>

        <div class="main">
            <h2>Home</h2>
            <hr>
            <table class="showMembers">
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </table>

            <table>
            <tr>
                <th>No.</th>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            <?php
            // for($i=0; $i<count(getFields("users")); $i++){
            //     echo getFields("users")[$i] . " ";
            //     // print_r(getFields("users")[$i]);
            // } 
            

            $data = getData("users");
            $id;
            for($i=0; $i<count($data); $i++){
                $num = $i +1;
                echo "<tr><td>$num</td>";
                foreach($data[$i] as $key => $value) {
                    // echo "$key : $value, ";
                    if($key== "id"){
                        $id=$value;
                    }
                    echo "<td> $value </td>";
                  }
                echo "<td style='text-align:center;cursor:pointer'>
                        <a class = 'delete' onclick='deletedata($id,". '"users")'."'>
                        <i class='fa fa-trash delete'></i></a>
                    </td>
                    <td style='text-align:center;cursor:pointer'>
                    <a onclick= 'get(".'"users"' .")'>
                        <i class='fas fa-pen'></i>
                    </a>
                    </td>
                </tr>";
            } 
            ?>

            </table>
           
        </div>
    </body>
</html>
<script>
    //INSERT INTO `users`(`firstName`, `lastName`, `email`, `pwd`, `role`) VALUES ("a", "a", "a", "a", "a" )
    
    function get(table){
        var data;
        $.post("Includes/get.php", {table: "users"}, data =>{
           var data = jQuery.parseJSON(data);
        //    console.log(data);
           var array = $.map(data, function(value, index){
               var num = index+1;
            //    console.log(value.id, value.firstName, value.lastName, value.email, value.pwd, value.role)
                $(".showMembers").append(
                    "<tr>"+ 
                    "<td>" + num + "</td>"+
                "<td>" + value.id + "</td>"+
                 "<td>" + value.firstName + "</td>" + 
                 "<td>" + value.lastName + "</td>" + 
                 "<td>" + value.email + "</td>" + 
                 "<td>" + value.pwd + "</td>" + 
                 "<td>" + value.role + "</td>" +
                 "<td><i onclick = 'deleteData("+ value.id+ "," + '"users"'+")' class='fa fa-trash'></i>" + "</td>"+
                 +  "<td onclick='deleteData("+ value.id + '"users"'+ ")'>" + + "</td>"
                 + 
                 "</tr>"
                 );
           })
        //    "<td style='text-align:center;cursor:pointer'><a class = 'delete' onclick='deletedata($id,". '"users")'."'><i class='fa fa-trash delete'></i></a>
        //             </td>
        //             <td style='text-align:center;cursor:pointer'>
        //             <a onclick= 'get(".'"users"' .")'>
        //                 <i class='fas fa-pen'></i>
        //             </a>
        //             </td>
        //         </tr>"

        })
   
    }
    // $(function() {
    //     $.post("Includes/get.php", {table: "users"}, message =>{
    //         console.log(message);
    //         location.reload();   
    //     })
    // });
    function deletedata(id, table){
        $.post("Includes/delete.php", {id: id, table: table}, message =>{
            console.log(message);
            location.reload();   
        })
    }

</script>