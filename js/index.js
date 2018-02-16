$(document).ready(function(){
	
	var emailText = document.getElementById("emailText");
	var emailSubmitBtn = document.getElementById("emailSubmitBtn");

	var firebaseRef = firebase.database().ref("EmailList");		

	emailSubmitClick = function(){	
		document.getElementById("message").className= ""; //remove hidden class & show message	
		
		if(ValidateEmail(emailText.value)){
			firebaseRef.push(emailText.value);			
		}
		else{
			document.getElementById("message").innerHTML= "Invalid Email";
			document.getElementById("message").style.color= "red";		
		}
	}
	
	function ValidateEmail(mail) {
	    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
	}
	
});

