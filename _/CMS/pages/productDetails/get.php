<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = isset($_POST['table']) ? $_POST['table'] : null;
$id = isset($_POST['productId']) ? $_POST['productId'] : null;

$sql = "SELECT * FROM $table, Attribute where productId=$id and $table.attributeId= Attribute.id";
$result = mysqli_query($GLOBALS["conn"], $sql);
$numOfRows = mysqli_num_rows($result);
$numOfCol =mysqli_num_fields($result);


$data = array();
if ($result){
    for($i=0; $i<$numOfRows; $i++){
        $aRow = array();
        $fetchItem = mysqli_fetch_assoc($result);
        for($j=0; $j<$numOfCol; $j++){
            $variable = mysqli_fetch_field_direct($result, $j)->name;
            // echo $j .", $variable".  ": " . $fetchItem[$variable] . " ";
            $aRow[$variable] = $fetchItem[$variable];
        }
        $data[$i] = $aRow;
    }
    // print_r($data);
    echo json_encode($data);
}
else{
    echo mysqli_error($GLOBALS["conn"]);
}
