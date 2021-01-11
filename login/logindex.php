<?php
session_start();

if (!isset($_SESSION['username'])) {
	$_SESSION['msg'] = "You must log in first";
	header('location: login.php');
	// echo ("<script>url = window.location.href;
	// console.log('url : 'url);");
}
?>

<script type="text/javascript">
	showPage("?login");
	}
</script>
<?php
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

	<div class="notification">
		<h1 style="text-align:center;">Logindex.php Home Page</h1>
		<!-- notification message -->
		<?php if (isset($_SESSION['success'])) : ?>
			<div class="error success">
				<h3>
					<?php
					echo $_SESSION['success'];
					// unset($_SESSION['success']);
					?>
				</h3>
			</div>
		<?php endif ?>

		<!-- logged in user information -->
		<?php if (isset($_SESSION['username'])) : ?>
			<p>Welcome <strong><?php echo $_SESSION['username']; ?></strong></p>
			<p> <a onclick="showPage('?membership')?logout='1'" style="color: red;decoration:underline;">logout</a> </p>
		<?php endif ?>
		<div class="login-home-page">
			<a onclick="showPage('?membership')"><button type="button" class="btn">GO BACK</button></a>
		</div>
	</div>



</body>

</html>