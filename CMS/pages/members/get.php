<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = isset($_POST['table']) ? $_POST['table'] : null;
$sql = "SELECT * FROM $table";
// echo ("Customer: $table");
$result = mysqli_query($GLOBALS["conn"], $sql);
$numOfRows = mysqli_num_rows($result);
$numOfCol =mysqli_num_fields($result);

// $fieldNameArr = array();
// for($i = 0; $i < $numOfCol; $i++) {
//     $field_info = mysqli_fetch_field_direct($result, $i);
//     $fieldNameArr[$i] = $field_info->name;
//     // echo " {$field_info->name} ";
// }


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
