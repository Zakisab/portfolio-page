const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navigationbuttons = document.querySelector('.navigationbuttons');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navigationbuttons.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navigationbuttons.classList.remove('open');
};