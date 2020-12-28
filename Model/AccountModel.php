<?php

require_once dirname(__FILE__).'/globalVariables.php';
class AccountModel{
        private $id;
        private $username;
        private $password;
        private $email;
        private $firstName;
        private $lastName;

        /*
            New user function
        */
        // function newUser( $username, $password, $firstname,$lastname,$email="",$language){
        //     if(!$result=$conn->query("INSERT INTO `account` VALUES (NULL, '$username', '$password','$firstname','$lastname','$email','$language');")){
        //         echo "Insert error";
        //     }
        // }

        /*
            Get and Set function
        */
        function getId(){
            return $this->id;
        }

        function getUser(){
            return $this->username;
        }

        function setUser($user){
            $this->username=$user;
        }

        function getPassword(){
            return $this->password;
        }

        function setPassword($pass){
            $this->password=$pass;
        }

        function getFN(){
            return $this->firstName;
        }

        function setFN($fn){
            $this->firstName=$fn;
        }

        function getLN(){
            return $this->lastName;
        }

        function setLN($ln){
            $this->lastName=$ln;
        }

        function getEmail(){
            return $this->email;
        }

        function setEmail($email){
            $this->email=$email;
        }

        function getName(){
            $name=$this->firstname. " ".$this->lastname;
            return $name;
        }

        // public function load($id){
        //     if(!$result=$this->db->query("SELECT * FROM `account` WHERE `id` =$id;")){
        //         error_log("Fail to load account");
        //     }

        //     $result=$result->fetch_assoc();
        //     $this->id=$id;
        //     $this->username=$result['username'];
        //     $this->password=$result['password'];
        //     $this->firstname=$result['firstname'];
        //     $this->lastname=$result['lastname'];
        //     $this->email=$result['email'];
        //     $this->language=$result['language'];
        //     return $this;
        // }
        
    }
?>