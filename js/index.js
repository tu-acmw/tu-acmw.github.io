$(document).ready(function(){

var emailText = document.getElementById("emailText");
var emailSubmitBtn = document.getElementById("emailSubmitBtn");

var firebaseRef = firebase.database().ref("EmailList");

function emailSubmitClick(){
	
	firebaseRef.push(emailText.value);
	
}	
		
});
