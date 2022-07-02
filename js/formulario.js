const email = document.getElementById("email");
const correo =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

function ValidadEmail() {
	if (email === correo){
		email.style.border = "2px solid blue";
	}
	else{
		email.style.border = "2px solid red";
	}
}