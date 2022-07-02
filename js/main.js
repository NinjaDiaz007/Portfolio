let audio = document.getElementById("audio");
let cuerpo = document.querySelector("body");

function Cargar(){
	audio.src = "./audio/energetic-indie-rock-jump.mp3";
	audio.load();
}
Cargar();

function PlaySong(){
	audio.play();
}