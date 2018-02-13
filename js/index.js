/*
var emailText = document.getElementById("emailText");
var emailSubmitBtn = document.getElementById("emailSubmitBtn");

function emailSubmitClick(){
	var firebaseRef = firebase.database().ref();
	
	firebaseRef.child("Text").set(emailText.value);
	
}
*/

$(document).ready(function(){
	
	var rootRef = firebase.database().ref().child("EmailList");
	
});