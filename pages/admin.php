<?php
include_once "Includes/dbConnect.php";
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    
    <body>
        <?php
        $sql = "select * from users";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);
        if($resultCheck>0){
            while($row=mysqli_fetch_assoc($result)){
                echo $row["Id"].' '.$row["FirstName"] .' '. $row["LastName"] . ' '. $row["Email"].' '. $row["Uid"].' '. $row["Password"]."<br>";
            }
        }
        ?>
    </body>
</html>