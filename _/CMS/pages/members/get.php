<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

$table = isset($_POST['table']) ? $_POST['table'] : null;
// $sql="SELECT * FROM $table";
$sql = "SELECT c.id, concat(c.firstName,' ', c.lastName)AS 'name', c.email, concat(c.streetAddress,', ', cityAddress, ', ',c.zipCodeAddress, ', ',c.countryAddress) as 'address', m.memberId, m.dateJoin, m.points 
FROM $table c left JOIN Membership m ON c.id=m.memberId";
// echo ("Customer: $table");
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
