function playAudio() {
	let audio = document.querySelector(`audio[data-key="${event.which || event.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	let key = document.querySelector(`.key[data-key="${event.which || event.keyCode}"]`);
	key.classList.add('playing');
}

function removeTransition(event) {
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playAudio)
