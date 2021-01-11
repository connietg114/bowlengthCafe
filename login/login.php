<?php include('server.php') ?>
<!DOCTYPE html>
<html>

<head>
	<title>Registration system PHP and MySQL</title>
	<link rel="stylesheet" type="text/css" href="login.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="../js/index.js"></script>
</head>

<body>
	<div class="login-header">
		<h2>Login</h2>
	</div>
	<div class="login-form">

		<form method="post" action="login/login.php">
			<?php include('errors.php'); ?>
			<div class="input-group">
				<label>Username</label>
				<input type="text" name="username">
			</div>
			<div class="input-group">
				<label>Password</label>
				<input type="password" name="password">
			</div>
			<div class="input-group">
				<button type="submit" class="btn" name="login_user">Login</button>
			</div>
			<p style="margin:20px;">
				Not yet a member? <a class="sign-in-up" onclick="showPage('?register2')">Sign up</a>
			</p>
			<div class="go-back-btn">
				<button type="button" onclick="showPage('?membership')" class="btn">GO BACK</button>
			</div>
	</div>

	</form>
</body>

</html>