var attempt = 3; 

function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( (username == "y23cs095" && password == "16") || (username == "y23cs129" && password == "99")){
		alert ("Login successfully");
		window.location = "success.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
	}
	}
}
