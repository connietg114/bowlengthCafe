<?php
$folderName = "pages";
if(strpos($_POST['file'], 'css')){
    $folderName = "css";
}

$myfile = fopen("../../".$folderName."/".$_POST['file'], "w") or die("Unable to open file!");

fwrite($myfile, $_POST['data']);
fclose($myfile);

echo "file saved";

?>