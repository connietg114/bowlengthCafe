<?php

$fileList = glob('../../pages/*');

for ($i = 0; $i < count($fileList); $i++) {
    $fileList[$i] = basename($fileList[$i]);
}

echo json_encode($fileList);

?>