<?php

require_once '../Model/AccountModel.php';
    function testInput($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    $code=testInput($_POST["code"]);
    if($code=="reg"){
        if ($_SERVER["REQUEST_METHOD"] == "POST"){
            $repass=testInput($_POST["newRepass"]);
            $user=testInput($_POST["newUser"]);
            $pass=testInput($_POST["newPass"]);
            $fn=testInput($_POST["newFN"]);
            $ln=testInput($_POST["newLN"]);
            $email=testInput($_POST["newEmail"]);
            if($repass==$pass){
                if((isset($user))&&(isset($pass))&&(isset($fn))&&(isset($ln))&&(isset($email))){
                    $collection= new AccountModel();
                    $collection->newUser($user,$pass,$fn,$ln,$email);
                    $feedback=array("status"=>"Success","code"=>"1"); 
                    $test="1";
                }else{
                    $feedback=array("status"=>"Fail","code"=>"0");
                    $test="0";
                }
            }else{
                $feedback=array("status"=>"Fail","code"=>"0");
                $test="2";
            }
            echo json_encode($test);
        }
    }
?>