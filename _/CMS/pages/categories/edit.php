<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = "MenuCategory";
$id = isset($_POST['id']) ? '"'. $_POST['id'].'"' : null;
$name = isset($_POST['name']) ? '"'. $_POST['name'].'"': "NULL";
$description = isset($_POST['description']) ? '"'. $_POST['description'] .'"': "NULL";

$sql = "update $table set name=$name, description=$description where id=$id;";
// print $sql;
$result = mysqli_query($GLOBALS["conn"], $sql) or die (mysqli_error($GLOBALS["conn"]));
$response_array;
if($result){
    $response_array['status'] = 'success';
}
else{
    $response_array['status'] = 'error';
}
echo json_encode($response_array);
// else{echo mysqli_error($GLOBALS["conn"]);}

exit();