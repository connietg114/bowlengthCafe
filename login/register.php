<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
  <link rel="stylesheet" type="text/css" href="login/login.css">
</head>
<body>
  <div class="login-header">
  	<h2>Register</h2>
  </div>
<div class="login-form">

  <form method="post" action="login/register.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  	  <label>Username</label>
  	  <input type="text" name="username" value="<?php echo $username; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Email</label>
  	  <input type="email" name="email" value="<?php echo $email; ?>">
  	</div>
  	<div class="input-group">
  	  <label>Password</label>
  	  <input type="password" name="password_1">
  	</div>
  	<div class="input-group">
  	  <label>Confirm password</label>
  	  <input type="password" name="password_2">
  	</div>
  	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">Register</button>
  	</div>
  	<p>
  		Already a member? <a class="sign-in-up" onclick="showPage('?login')">Sign in</a>
  	</p>
    <div class="go-back-btn">
      <button type="button" onclick="showPage('?membership')" class="btn">GO BACK</button>
    </div>
  </form>
  </div>
</body>
</html>
