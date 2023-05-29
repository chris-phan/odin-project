let mouse_is_down = false;
let pen_mode = 'DEFAULT';

function get_grid_size() {
	let grid_size = -1;
	do {
		grid_size = prompt(
			'Enter the size you want the square grid to be (max: 100x100)'
		);
	} while (
		isNaN(grid_size) ||
		Number(grid_size) > 100 ||
		Number(grid_size) <= 0
	);

	return grid_size;
}

function random_hsl() {
	return 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';
}

function add_pixel_color(pixel) {
	switch (pen_mode) {
		case 'RANDOM':
			console.log(pixel.style.backgroundColor);
			pixel.style.backgroundColor = random_hsl();
			break;
		default:
			pixel.style.backgroundColor = 'black';
	}
}

function remove_pixel_color(pixel) {
	pixel.style.backgroundColor = 'white';
}

function add_pixel_mouse_events(pixel) {
	pixel.addEventListener('mouseover', () => {
		if (mouse_is_down) {
			add_pixel_color(pixel);
		}
	});

	pixel.addEventListener('mousedown', () => {
		mouse_is_down = true;
		add_pixel_color(pixel);
	});

	pixel.addEventListener('mouseup', () => {
		mouse_is_down = false;
	});

	pixel.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		remove_pixel_color(pixel);
	});
}

function create_grid_pixel() {
	let pixel = document.createElement('div');
	pixel.classList.add('grid-pixel');
	pixel.setAttribute('draggable', false);

	add_pixel_mouse_events(pixel);
	return pixel;
}

function create_grid_row(grid_size) {
	let grid_row = document.createElement('div');
	grid_row.classList.add('grid-row');
	for (let i = 0; i < grid_size; i++) {
		let pixel = create_grid_pixel();
		grid_row.appendChild(pixel);
	}
	return grid_row;
}

function create_grid(grid_size) {
	const grid_element = document.querySelector('#grid');

	// Removes all current elements in the grid
	grid_element.textContent = '';

	for (let i = 0; i < grid_size; i++) {
		let grid_row = create_grid_row(grid_size);
		grid_element.appendChild(grid_row);
	}
}

function init_change_grid_size_btn() {
	document
		.querySelector('#change-grid-size-btn')
		.addEventListener('click', () => {
			let grid_size = get_grid_size();
			create_grid(grid_size);
		});
}

function init_default_pen_btn() {
	document.querySelector('#default-pen-btn').addEventListener('click', () => {
		pen_mode = 'DEFAULT';
	});
}

function init_rand_pen_btn() {
	document.querySelector('#rand-pen-btn').addEventListener('click', () => {
		pen_mode = 'RANDOM';
	});
}

function init_clear_grid_btn() {
	document.querySelector('#clear-grid-btn').addEventListener('click', () => {
		document.querySelectorAll('.grid-pixel').forEach((pixel) => {
			pixel.style.backgroundColor = 'white';
		});
	});
}

function init_buttons() {
	init_change_grid_size_btn();
	init_default_pen_btn();
	init_rand_pen_btn();
	init_clear_grid_btn();
}

function main() {
	init_buttons();
	let grid_size = 16;
	create_grid(grid_size);
}

window.addEventListener('load', () => {
	main();
});
