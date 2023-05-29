import { create_tag } from '../helper_functions/html_creator';

const Menu = (() => {
	const generate_menu_item = (name, text_body) => {
		const menu_item = create_tag('div', 'menu-item');
		const item_name = create_tag('h2', 'menu-item-name', name);
		const item_body = create_tag('p', 'menu-item-body', text_body);
		menu_item.appendChild(item_name);
		menu_item.appendChild(item_body);
		return menu_item;
	};
	const generate_menu_grid = () => {
		const menu_grid = create_tag('div', 'menu-grid');

		const menu_item1 = generate_menu_item(
			'Triple Banana Super Split',
			"What's better than 1 banana in your banana split? Two! Oh but what's better than 2 bananas in your banana split? Three! Oh but what's better than 3 bananas in your banana split? Nothing, life doesn't get any better."
		);

		const menu_item2 = generate_menu_item(
			'Black Ice',
			'Last night, I was in a perfectly safe neighborhood walking away from an ATM machine when black ice just snuck up on me and practically robbed me of my balance.'
		);

		const menu_item3 = generate_menu_item(
			'What Did You Berry?',
			'Blueberries, blueberries, and even more blueberries! Trust me, you should just try it like real people do.'
		);

		const menu_item4 = generate_menu_item(
			'Cherry-It!',
			'A total fan favorite! Loved particularly by french fencers and crusaders.'
		);

		const menu_item5 = generate_menu_item(
			'Apple-dite',
			"I can't believe it's real. Love at first sight! A foamy delight!"
		);

		const menu_item6 = generate_menu_item(
			'Milkshake and Fries',
			'You got fries with that shake? Yes we do!'
		);

		const menu_item7 = generate_menu_item(
			'Free Churro',
			'Peace be with you.'
		);

		const menu_item8 = generate_menu_item(
			'Plutonium Hunger',
			'The struggle continues'
		);

		const all_menu_items = [
			menu_item1,
			menu_item2,
			menu_item3,
			menu_item4,
			menu_item5,
			menu_item6,
			menu_item7,
			menu_item8,
		];

		all_menu_items.forEach((item) => {
			menu_grid.appendChild(item);
		});

		return menu_grid;
	};

	const generate_menu = () => {
		const content_div = document.querySelector('#content');

		const menu = create_tag('div', 'menu');
		const menu_title = create_tag('h1', 'section-title', 'Menu');
		const menu_grid = generate_menu_grid();

		menu.appendChild(menu_title);
		menu.appendChild(menu_grid);

		content_div.appendChild(menu);
	};

	return { generate_menu };
})();

export default Menu;
