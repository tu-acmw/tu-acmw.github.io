$(document).ready(function(){
	
	var firebaseRef = firebase.database().ref().child("Members");

	emailSubmitClick = function(){
		if(ValidateEmail(emailText.value) && ValidateName(firstName.value) && ValidateName(lastName.value)){
			firebaseRef.child(firstName.value + " " + lastName.value).set({"First name": firstName.value, 
													"Last name": lastName.value,
													"Email" : emailText.value});
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

