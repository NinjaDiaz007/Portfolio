let switch1 = document.getElementById("switch-1");
let switch2 = document.getElementById("switch-2");
let body = document.getElementById('Home');

switch1.addEventListener('click', ()=>{
	if (switch1.checked === true){
		body.classList.add("elegante-oscuro");
		body.classList.remove("azul-frio");
		body.style.transition = ".4s";
		switch2.checked = true;
	}
	else{
		body.style.transition = ".4s";
		body.classList.add("azul-frio");
		body.classList.remove("elegante-oscuro");
		switch2.checked = false;
	}
});

switch2.addEventListener('click', ()=>{
	if (switch2.checked === true) {
		body.classList.add("elegante-oscuro");
		body.classList.remove("azul-frio");
		body.style.transition = ".4s";
		switch1.checked = true;
	}
	else{
		body.style.transition = ".4s";
		body.classList.add("azul-frio");
		body.classList.remove("elegante-oscuro");
		switch1.checked = false;
	}
})