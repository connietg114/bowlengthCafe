<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = "MenuCategory";
$id = 0;
$name = isset($_POST['name']) ? $_POST['name'] : null;
$description = isset($_POST['description']) ? $_POST['description'] : null;

// print $name . " ". $categoryId." ".$description;
$postItems = array($id, '"'.$name.'"', '"'.$description.'"');
// $escaped_values = array_map('mysql_real_escape_string', array_values($postItems));
$values  = implode(", ", array_values($postItems));
// echo array_keys($postItems);

// print_r($postItems);

$sql = "INSERT INTO $table VALUES ($values);";
// echo $sql;
$result = mysqli_query($GLOBALS["conn"], $sql);

$response_array;
if($result){
    $response_array['status'] = 'success';
}
else{
    $response_array['status'] = 'error';
}
echo json_encode($response_array);
exit();
