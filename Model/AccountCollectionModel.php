<?php


require_once '../Model/AccountModel.php';
require_once '../CMS/Includes/globalVariables.php';

class AccountCollectionModel {

    private $ids;

    public function getIdArray(){
        if(!$result=$GLOBALS["conn"]->query("SELECT `id` FROM `account`;")){
            error_log("Can't get anything from the database",0);
        }
        $this->ids=array_column($result->fetch_all(),0);
    }

    public function createAllAccount(){
        foreach($this->ids as $id){
            yield(new AccountModel())->load($id);
        }
    }
}

?>