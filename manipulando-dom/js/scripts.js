function changeMode() {
	changeClasses();
	changeText();

}
function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}


function changeText() {
	const lightMode = "Light Mode";
	const lightModeButton = "Mudar Para Light Mode";
	const darkMode = "Dark Mode";
	const darkModeButton = "Mudar Para Dark Mode";

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightModeButton;
		h1.innerHTML =  darkMode + " ON"
		return;
	}
	button.innerHTML = darkModeButton;
	h1.innerHTML = lightMode + " ON"
	return;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode)