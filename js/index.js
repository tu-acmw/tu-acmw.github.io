$(document).ready(function(){
	
	var firebaseRef = firebase.database().ref().child("Members");

	emailSubmitClick = function(){
		message.className= ""; //remove hidden class & show message

		if(ValidateEmail(emailText.value) && ValidateName(firstName.value) && ValidateName(lastName.value)){
			firebaseRef.child(firstName.value + " " + lastName.value).set({"First name": firstName.value, 
													"Last name": lastName.value,
													"Email" : emailText.value});
													
			message.innerHTML= "Success!";
			message.style.color= "#19c433";
		}
		else if(firstName.value == '' || firstName.value.length >40
				|| lastName.value == '' || lastName.value.length >40){
			message.innerHTML= "Please enter your name";
			message.style.color= "red";
		}
		else{
			message.innerHTML= "Invalid Email";
			message.style.color= "red";
		}

	}
	
	function ValidateEmail(mail) {
	    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) 
		&& mail.length >0 && mail.length <=254;
	}
	
	function ValidateName(name) {
	    return name.length >0 && name.length <=40;
	}
	
});

//collapse mobile menu when link is clicked
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

