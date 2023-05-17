import { create_tag } from '../helper_functions/html_creator';

const TabButton = (() => {
	const _generate_buttons = () => {
		const welcome_btn = create_tag('button', 'welcome-btn', 'Welcome');
		const menu_btn = create_tag('button', 'menu-btn', 'Menu');
		const contact_btn = create_tag('button', 'contact-btn', 'Contact');
		return [welcome_btn, menu_btn, contact_btn];
	};

	const generate_tab_buttons = () => {
		const content = document.querySelector('#content');

		const button_group = create_tag('div', 'button-group');
		const buttons = _generate_buttons();

		buttons.forEach((btn) => {
			button_group.appendChild(btn);
		});

		content.appendChild(button_group);
	};

	return { generate_tab_buttons };
})();

export default TabButton;
