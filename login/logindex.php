<?php
  session_start();

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Registration-Home</title>
	<link rel="stylesheet" type="text/css" href="login/login.css">
</head>
<body>

<div class="login-home-header">
	<h2>Login Home-Page</h2>
</div>
<div class="notification">
  	<!-- notification message -->
  	<?php if (isset($_SESSION['success'])) : ?>
      <div class="error success" >
      	<h3>
          <?php
          	echo $_SESSION['success'];
          	// unset($_SESSION['success']);
          ?>
      	</h3>
      </div>
  	<?php endif ?>

    <!-- logged in user information -->
    <?php  if (isset($_SESSION['username'])) : ?>
    	<p>Welcome <strong><?php echo $_SESSION['username']; ?></strong></p>
    	<p> <a onclick="showPage('?membership')?logout='1'" style="color: red;decoration:underline;">logout</a> </p>
    <?php endif ?>
    <div class="login-home-page">
      <a onclick="showPage('?membership')"><button type="button" class="btn">GO BACK</button></a>
    </div>
</div>



</body>
</html>
