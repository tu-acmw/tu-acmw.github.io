$(document).ready(function(){
	
	var nameText = document.getElementById("nameText");
	var emailText = document.getElementById("emailText");
	var emailSubmitBtn = document.getElementById("emailSubmitBtn");
	var message = document.getElementById("message");
	
	var firebaseRef = firebase.database().ref();		

	emailSubmitClick = function(){	
		message.className= ""; //remove hidden class & show message	

		if(ValidateEmail(emailText.value) && nameText.value != ""){
			firebaseRef.child(nameText.value).set({Email: emailText.value});
			message.innerHTML= "Success!";
			message.style.color= "#19c433";			
		}
		else if(nameText.value == ""){
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
	
	$("#contactLink").click(function(){
         document.location.href = "mailto:xyz@something.com";
     });
	
});

