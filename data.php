<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Chuyển số ĐT 11 số thành 10 số</title>
	<style>
	body { font: normal normal normal 13px/150% Arial, Helvetica, sans-serif; }
	</style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script>
		var fixed_prefix = ["086", "096", "097", "098", "089", "090", "093", "088", "091", "094", "092", "056", "058", "099"];

		var viettel_old = ["0162", "0163", "0164", "0165", "0166", "0167", "0168", "0169"];
		var viettel_new = ["032", "033", "034", "035", "036", "037", "038", "039"];      
		var mobile_old = ["0120", "0121", "0122", "0126", "0128"];
		var mobile_new = ["070", "079", "077", "076", "078"];
		var vina_old = ["0123", "0124", "0125", "0127", "0129"];
		var vina_new = ["083", "084", "085", "081", "082"]; 
		var vnmobile_old = ["0186", "0188"];
		var vnmobile_new = ["056", "058"];
		var gmobile_old = ["0199"];
		var gmobile_new = ["059"];
		var all_old = viettel_old.concat(mobile_old, vina_old, vnmobile_old, gmobile_old);
		var all_new = viettel_new.concat(mobile_new, vina_new, vnmobile_new, gmobile_new);

		function clearValue() {
			document.getElementById('ten_digits').value = '';
		}

		function change() {
			var inputNumber = document.getElementById("ten_digits").value;	// new prefix
			var outputNumber;	// old prefix starting with 84
			if (inputNumber.indexOf("0") == "0" && (inputNumber.length == 10 || inputNumber.length == 11)) {
				var cur_prefix = inputNumber.substr(0, 3);
				for (var i = 0; i < all_new.length; i++) {
					if (cur_prefix == all_new[i]) {
						outputNumber = "84" + all_old[i].substr(1, 3) + inputNumber.substr(3, 7);
						document.getElementById("ten_digits").value = outputNumber;
					}
				}

				for (var i = 0; i < fixed_prefix.length; i++) {
					if (cur_prefix == fixed_prefix[i]) {
						outputNumber = "84" + inputNumber.substr(2, 9);
						document.getElementById("ten_digits").value = outputNumber;
					}
				}
			}
		}
		$(document).ready(()=>{
			$("#hihi").click(function(){
				console.log('hihi');
				var phone_number_new = $("#ten_digits").val();
				$.ajax({
					url: "fetch.php",
					type: "post",
					data: { phone: phone_number_new},
					dataType: "json",
					success: function(data){
						alert(data.fb_id);
					}
				});
			});
		})


	</script>
</head>
<body>
	<input id="ten_digits" type="text">
	<button id="btn_change" onclick="change();">Change</button>
	<button onclick="clearValue();">Clear</button>
	<button type="button" id="hihi">Send request</button>
	<div id="content"></div>
</body>
</html>