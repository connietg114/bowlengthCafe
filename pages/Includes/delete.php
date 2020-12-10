<?php
require_once dirname(__FILE__).'/globalVariables.php';
require_once dirname(__FILE__).'/Includes/sqlQuery.php';

$id = isset($_POST['id']) ? $_POST['id'] : null;
$table = isset($_POST['table']) ? $_POST['table'] : null;

$sql = "DELETE FROM $table WHERE id = $id";
$result = mysqli_query($GLOBALS["conn"], $sql) or die (mysqli_error($GLOBALS["conn"]));
exit();
// else{echo mysqli_error($GLOBALS["conn"]);}
