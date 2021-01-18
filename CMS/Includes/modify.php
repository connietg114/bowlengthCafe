<?php
// $folderName = "pages";
// if(strpos($_POST['file'], 'css')){
//     $folderName = "css";
// }
if(file_exists($_POST['file'])){
    $myfile = fopen($_POST['file'], "w") or die("Unable to open file!");
} else {
    $myfile = fopen($_POST['file'], "wb") or die("Unable to open file!");
}

fwrite($myfile, $_POST['data']);
fclose($myfile);

echo "file saved";

?>