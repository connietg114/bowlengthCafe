<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = isset($_POST['table']) ? $_POST['table'] : null;
$sql = "SELECT o.id, o.customerId, o.operatorId, o.dateTime, o.pointsUsed, o.tableNo, concat(c.firstName, ' ', c.lastName)as 'customerName', concat(u.firstName, ' ', u.lastName) as 'operatorName'
FROM $table o, Customer c, User u 
where o.customerId=c.id
and o.operatorId=u.id";
// echo $table;
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