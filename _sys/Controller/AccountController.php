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
            $i=0;
            //check username exist or not, prevent the duplication of name
            if(isset($user)){
                $collection=new AccountCollectionModel();
                $collection->getIdArray();
                $users=$collection->createAllAccount();
                foreach($users as $member){
                    if(($member->getUser())==$user){
                        $i++;
                        break;
                    }
                }
            }
            if($i==0){
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
                            $_SESSION["id"]=$user->getId();
                            $_SESSION["password"]=$user->getPassword();
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
    }else if($code=="username"){
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            $regUser=testInput($_POST["regUser"]);
            $count=0;
            if(isset($regUser)){
                $collection=new AccountCollectionModel();
                $collection->getIdArray();
                $users=$collection->createAllAccount();
                foreach($users as $user){
                    if($user->getUser()==$regUser){
                        $count++;
                        break;
                    }
                }
                if($count==0){
                    $feedback=array("status"=>"Username is availble","code"=>"1");
                }else{
                    $feedback=array("status"=>"This username has been used","code"=>"0");
                }
                echo json_encode($feedback);
            }
        }
    }else if($code=="logout"){
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            session_start();
            session_unset();
            session_destroy();
        }
    }
    
?>