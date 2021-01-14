<?php 

$fileList = []; 
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($_POST['data']));
foreach ($iterator as $file) {
    if ($file->isDir()) continue;
    $path = $file->getPathname();
    array_push($fileList, $path);
}

for ($i = 0; $i < count($fileList); $i++) {
    $fileList[$i] = basename($fileList[$i]);
}


echo json_encode($fileList);

?>