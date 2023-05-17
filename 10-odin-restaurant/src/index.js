import TabButtons from './components/tab_buttons';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Contact from './components/contact';

function clear_content() {
	let all_content = document.querySelectorAll('#content > div');
	all_content = Array.from(all_content);
	const main_content = all_content.filter(
		(el) => !el.classList.contains('button-group')
	);

	main_content.forEach((content) => {
		if (!content.classList.contains('hidden')) {
			content.classList.add('hidden');
		}
	});
}

function display_content(content_class_name) {
	const content = document.querySelector('.' + content_class_name);
	if (content.classList.contains('hidden')) {
		content.classList.remove('hidden');
	}
}

function init_tab_buttons() {
	const welcome = document.querySelector('.welcome-btn');
	welcome.addEventListener('click', () => {
		clear_content();
		display_content('welcome');
	});

	const menu_btn = document.querySelector('.menu-btn');
	menu_btn.addEventListener('click', () => {
		clear_content();
		display_content('menu');
	});

	const contact_btn = document.querySelector('.contact-btn');
	contact_btn.addEventListener('click', () => {
		clear_content();
		display_content('contact');
	});
}

function main() {
	TabButtons.generate_tab_buttons();
	Welcome.generate_welcome();
	Menu.generate_menu();
	Contact.generate_contact();
	clear_content();
	display_content('welcome');
	init_tab_buttons();
}

window.addEventListener('load', () => {
	main();
});
