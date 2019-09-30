<?php
	session_start();
	if(!isset($_SESSION['username'])) {
		header("location: https://google.com");
	}
	header('Access-Control-Allow-Origin: http://youdomain.com');
	// kết nối dtb
	$connection = mysqli_connect('localhost', '', '', '');
	mysqli_query($connection,'SET NAMES "UTF8"');

	// kiểm tra xem đã tồn tại số điện thoại mà người dùng nhập vào hay chưa
	if (isset($_POST['phone'])) {
		$haveid_query = "SELECT `fb_id`, `phone` FROM `phone_number` WHERE `phone` = '{$_POST['phone']}'";
		$haveid_sql = mysqli_query($connection, $haveid_query);
		$not_haveid_query = "SELECT `phone` FROM `fb_id_unknown` WHERE `phone` = '{$_POST['phone']}'";
		$not_haveid_sql = mysqli_query($connection, $not_haveid_query);
		$data = [];
		if (mysqli_num_rows($haveid_sql) > 0 && mysqli_num_rows($not_haveid_sql) == 0) {		// return phone number with fb id
			while ($row = mysqli_fetch_array($haveid_sql)) {
				$data["code"] = "200";
				$data["phone"] = $_POST['phone'];
				$data["fb_id"] = $row["fb_id"];		
			}
			echo json_encode($data);
		}
		else if (mysqli_num_rows($haveid_sql) == 0 && mysqli_num_rows($not_haveid_sql) > 0) {
			while ($row = mysqli_fetch_array($not_haveid_sql)) {
				$data["code"] = "404";
				$data["phone"] = $_POST['phone'];
				$data["fb_id"] = "No results are found";
			}
			echo json_encode($data);
		}
		else if (mysqli_num_rows($haveid_sql) == 0 && mysqli_num_rows($not_haveid_sql) == 0) {
		// gọi api quét số điện thoại

			//create curl resource
			$ch = curl_init();

			// Will return the response, if false it print the response
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

			//set url
			curl_setopt($ch, CURLOPT_URL, "https://***.com/***/****/convert.php?phone=" . $_POST['phone']);

			// $result contains the json output
			$output = curl_exec($ch);

			// close curl resource to free up system resources
			curl_close($ch);

			// decode json output into php array with two indices "code" and "uid"
			$result = json_decode($output, true);
			
			// if successful
			if ($result["code"] == '200') {
				// save to dtb
				$query = "INSERT INTO `phone_number`(`fb_id`, `phone`) VALUES ('{$result["uid"]}', '{$_POST['phone']}')";
				$sql = mysqli_query($connection, $query);

				// output the data to the screen
				$data["code"] = "200";
				$data["phone"] = $_POST['phone'];
				$data["fb_id"] = $result["uid"];
				echo json_encode($data);
			}

			// if failed
			else if ($result["code"] == '404') {
				//save to dtb
				$query = "INSERT INTO `fb_id_unknown`(`phone`) VALUES ('{$_POST['phone']}')";
				$sql = mysqli_query($connection, $query);
				
				// output the data to the screen
				$data["code"] = "404";
				$data["phone"] = $_POST['phone'];
				$data["fb_id"] = "No results are found";
				echo json_encode($data);
			}
		}
	}
	session_destroy();
?>