<?php
require_once dirname(__FILE__)."/../Includes/dbConnect.php";
require_once dirname(__FILE__).'/../Includes/globalVariables.php';
require_once dirname(__FILE__).'/../Includes/sqlQuery.php';

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.min.js"></script>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="css/backend.css">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        
        <script src="js/backend.js"></script>
    </head>
    
    <body>
        <div class="sidenav">
            <!-- show login username eg. Hi, Leo Liang -->

            <a onclick="showPage('?home')">Home</a>
            <a onclick="showPage('?members')">Members</a>
            <a onclick="showPage('?orders')">Orders</a>
            <a onclick="showPage('?categories')">Categories</a>
            <a onclick="showPage('?products/All')">Products</a>
            <a href="#">Lost/Found</a>
            <a onclick="showPage('?events')">Events</a>
            <a onclick="showPage('?profile')">Profile</a>
            <a onclick = "showPage('?page-editor')">
            <!-- <a onclick = "openFeature('page-editor')"> -->
            <a onclick="showPage('../../../index.html');logout()">Log Out</a>
            <a onclick = "showPage('?page-editor')">

                <div>
                    <span>Page Editor</span>
                </div>
            <a>
        </div>

        <div class="main">
        </div>
    </body>
</html>
