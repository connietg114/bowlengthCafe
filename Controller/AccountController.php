<?php
    function testInput($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $code=testInput($_POST["code"]);
    if($code=="reg"){
        if ($_SERVER["REQUEST_METHOD"] == "POST"){
            $user=testInput($_POST["newUser"]);
            $pass=testInput($_POST["newPass"]);
            $fn=testInput($_POST["newFN"]);
            $ln=testInput($_POST["newLN"]);
            $email=testInput($_POST["newEmail"]);
            if((isset($user))&&(isset($pass))&&(isset($fn))&&(isset($ln))&&(isset($email))){
                $collection= new AccountModel();
                $collection->newUser($user,$pass,$fn,$ln,$email);
                $feedback=array("status"=>"Success","code"=>"1");
                
            }else{
                $feedback=array("status"=>"Fail","code"=>"0");
            }
            echo json_encode($feedback);
        }
    }
?>