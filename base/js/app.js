// hides main site on entry
document.getElementById('main').hidden = true;

//gets the song and lowers volume
var bg = document.getElementById('song');
bg.volume = 0.3;

//listens for click
document.addEventListener('click', function () {
	bg.play();
	document.getElementById('click').hidden = true;
	document.getElementById('main').hidden = false;
});