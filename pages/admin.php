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
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="backend.css">
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
            <?php
            // for($i=0; $i<count(getFields("users")); $i++){
            //     echo getFields("users")[$i] . " ";
            //     // print_r(getFields("users")[$i]);
            // } 

            $data = getData("users");
            // print_r (array_values($data));
            for($i=0; $i<count($data); $i++){
                foreach($data[$i] as $key => $value) {
                    // echo "$key : $value, ";
                    echo "$value ";
                  }
                echo "<br/>";
            } 
            ?>
        </div>
    </body>
</html>