<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = isset($_POST['table']) ? $_POST['table'] : null;

$sql = "SELECT * FROM $table";
$result = mysqli_query($GLOBALS["conn"], $sql);
$numOfRows = mysqli_num_rows($result);
// echo $numOfRows;
$data = array();
$fieldNames = getFields($table);

$fieldNamesString = implode(getFields($table)) ;

$fieldNamesString = explode(" ", $fieldNamesString);
// echo $fieldNamesString;

if ($result){
    // echo "true";
    for($i=0; $i<$numOfRows; $i++){
        $aRow = array();
        $fetchItem = mysqli_fetch_assoc($result);
        for($j=0; $j<sizeof($fieldNames); $j++){
            $variable = $fieldNamesString[$j];
            // echo $j .", $variable".  ": " . $fetchItem[$variable] . " ";
            $aRow[$variable] = $fetchItem[$variable];
        }
        $data[$i] = $aRow;
    }
    echo json_encode($data);
}
else{
    // echo "false";
    echo mysqli_error($GLOBALS["conn"]);
}