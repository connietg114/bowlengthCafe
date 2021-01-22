<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = "Product";
$name = isset($_POST['name']) ? $_POST['name'] : null;
$categoryId = isset($_POST['categoryId']) ? $_POST['categoryId'] : null;
$description = isset($_POST['description']) ? $_POST['description'] : null;

print $name . " ". $categoryId." ".$description;
$postItems = array($name, $categoryId, $description);
print_r($postItems);
echo "<br>";
// print $categoryId;
// print $description;

$data=array();

echo json_encode($data);