
<?php
$username="";
$name="";
$user="";
session_start();

if(isset($_SESSION["username"])&&isset($_SESSION["name"])){
    $user="Welcome, ".$_SESSION["name"];
}


?>

<div class="topnav" id="myTopnav">
    <div class="logoDiv" style="cursor:pointer" onclick="showPage('?home')">
        <img class='active' id="logo" src="file/img/logo.png" alt="profile">
    </div>
    <a class="icon" id="menu-icon" href="javascript:void(0);" onclick="myFunction()">
        <img class="menuImg" src="file/img/menubut.PNG"></img>
    </a>
    

    <div id="myMenu" class="menu-content">
        <div id="greeting" class="greeting">
            <?php 
                echo $user; 
            ?>
            <a onclick="logout()">Logout</a>
        </div>

        <a class="navButton" onclick="showPage('?home')">Home</a>
        <a class="navButton" onclick="showPage('?covid-19')">Covid-19</a>
        <a class="navButton" onclick="showPage('?menu')">Menu</a>
        <!--<a class="navButton" onclick="showPage('?blog')">Blog</a>-->
        <a class="navButton" onclick="showPage('?locations')">Locations</a>

        <!--
        <div class="dropdown" id="ourServices">
            <button style="text-transform: uppercase;" class="dropbtn" onclick="serviceDropdownMenu()">Follow
                    <i class="fa fa-caret-down"></i>
                </button>

            <div id="myDropdown" class="dropdown-content">
                <a class="navButton" onclick="window.open('https://www.facebook.com/bubbleteawellington/')">Facebook</a>
                <a class="navButton" onclick="window.open('https://www.instagram.com/noahsarkteahouse/')">Instagram</a>
            </div>
        </div>-->
        <a class="navButton" onclick="showPage('?about')">About Us</a>
        <a class="navButton" onclick="showPage('?membership')">Membership</a>
    </div>
</div>