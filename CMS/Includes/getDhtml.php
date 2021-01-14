<?php 

$fileList = []; 
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($_POST['data']));
foreach ($iterator as $file) {
    if ($file->isDir()) continue;
    $path = $file->getPathname();
    array_push($fileList, $path);
}

echo json_encode($fileList);

?>