<?php

require_once '../Model/AccountModel.php';
require_once '../Model/AccountCollectionModel.php';

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
                    $collection->newUser($user,md5($pass),$fn,$ln,$email);
                    $feedback=array("status"=>"Success","code"=>"1"); 
                    
                }else{
                    $feedback=array("status"=>"Fail","code"=>"0");
                }
            }else{
                $feedback=array("status"=>"Fail","code"=>"0");
            }
            echo json_encode($feedback);
        }
    }else if($code=="login"){
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            $loginUser=testInput($_POST["username"]);
            $loginPass=testInput($_POST["password"]);
            $count=0;
            
            if((isset($loginUser))&&(isset($loginPass))){
                $collection=new AccountCollectionModel();
                $collection->getIdArray();
                $users=$collection->createAllAccount();
                foreach($users as $user){
                    if($user->getUser()==$loginUser){
                        $count++;
                        if(md5($loginPass)==$user->getPassword()){
                            session_start();
                            $_SESSION["username"]=$loginUser;
                            $_SESSION["name"]=$user->getName();
                            $response="Login Success, Welcome ".$user->getName();
                            $feedback=array("status"=>"success","response"=>$response,"code"=>"1","page"=>"?index");
                        }else{
                            $feedback=array("status"=>"fail","response"=>"Login Fail, Password not match","code"=>"1","page"=>"?member");
                        }
                        break;
                    }
                }
            }
            if($count==0){
                $feedback=array("status"=>"fail","response"=>"Login Fail, Username not existed","code"=>"2","page"=>"?member");
            }
             echo json_encode($feedback);
        }
    }
    
?>