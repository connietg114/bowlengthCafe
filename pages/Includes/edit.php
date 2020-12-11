<?php
// not finished yet
$updateArray = isset($_POST['updateArray']) ? $_POST['updateArray'] : null;
$id = isset($_POST['id']) ? $_POST['id'] : null;
$table = isset($_POST['table']) ? $_POST['table'] : null;

$sql = "UPDATE $table SET $updateArray
            WHERE id = $id";
$result = mysqli_query($GLOBALS["conn"], $sql);
if($result){
    echo "Updated!";
}else{
    echo mysqli_error($GLOBALS["conn"]);
}