<?php 


$cssList = glob('../../css/*');


for ($i = 0; $i < count($cssList); $i++) {
    $cssList[$i] = basename($cssList[$i]);
}

echo json_encode($cssList);

?>