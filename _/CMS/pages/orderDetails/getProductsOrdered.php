<?php
require_once dirname(__FILE__).'/../../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../../Includes/sqlQuery.php';

// $table = isset($_POST['table']) ? $_POST['table'] : null;
$id = isset($_POST['id']) ? $_POST['id'] : null;

// $sql = "SELECT * FROM $table, Customer, User where customerId=Customer.id and operatorId=User.id and $table.id=$id";
$sql = "SELECT o.orderId, o.productAttributeId, p.name as 'productName', pa.cost,pa.description, a.name as 'attributeName'
FROM OrderLines o, ProductAttribute pa, Product p, Attribute a
WHERE o.orderId=$id
and o.productAttributeId = pa.id
and pa.productId = p.id
and pa.attributeId = a.id";

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
