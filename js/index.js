$(document).ready(function(){
	
	var nameText = document.getElementById("nameText");
	var emailText = document.getElementById("emailText");
	var emailSubmitBtn = document.getElementById("emailSubmitBtn");
	var message = document.getElementById("message");
	
	var firebaseRef = firebase.database().ref();		

	emailSubmitClick = function(){	
		message.className= ""; //remove hidden class & show message	

		if(ValidateEmail(emailText.value) && ValidateName(nameText.value)){
			firebaseRef.child(nameText.value).set({Email: emailText.value});
			message.innerHTML= "Success!";
			message.style.color= "#19c433";			
		}
		else if(nameText.value == "" || nameText.value.length >40){
			message.innerHTML= "Please enter your name";
			message.style.color= "red";	
		}
		else{
			message.innerHTML= "Invalid Email";
			message.style.color= "red";		
		}
	}
	
	function ValidateEmail(mail) {
	    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) && mail.length <=254;
	}
	
	function ValidateName(name) {
	    return name.value != "" && name.length <=40;
	}
	
	$("#contactLink").click(function(){
         document.location.href = "mailto:xyz@something.com";
     });
	
});

