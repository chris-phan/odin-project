const INDEX_OF_NUMBER_IN_NUMBER_BTN_ID = 4;
const MAX_NUMS_DISPLAYED = 13;
let previous_number = null;
let current_number = 0;
let operation_pressed = false;
let current_operation = '';

function extract_number_from_id(number_btn_id) {
	let id_string = number_btn_id + '';
	return id_string.charAt(INDEX_OF_NUMBER_IN_NUMBER_BTN_ID);
}

function write_to_screen(number) {
	const calc_text = document.querySelector('#calculator-text');
	if (operation_pressed) {
		console.log('here');
		calc_text.innerText = number + '';
		operation_pressed = false;
	} else if (calc_text.innerText == '0') {
		calc_text.innerText = number + '';
	} else if (calc_text.innerText.length < MAX_NUMS_DISPLAYED) {
		calc_text.innerText = calc_text.innerText + number + '';
	} else {
		alert(
			`You can only enter numbers up to ${MAX_NUMS_DISPLAYED} digits long`
		);
	}
	current_number = Number(calc_text.innerText);
}

function pop_screen_right() {
	const calc_text_tag = document.querySelector('#calculator-text');
	let calc_text = calc_text_tag.innerText;
	if (operation_pressed) {
		return;
	}

	if (
		calc_text.length === 1 ||
		(calc_text.length === 2 && calc_text.includes('-'))
	) {
		calc_text_tag.innerText = '0';
	} else {
		calc_text_tag.innerText = calc_text.slice(0, calc_text.length - 1);
	}
	current_number = Number(calc_text_tag.innerText);
}

function clear_screen() {
	const calc_text = document.querySelector('#calculator-text');
	calc_text.innerHTML = '0';
	previous_number = null;
	current_number = 0;
}

function toggle_sign() {
	const calc_text = document.querySelector('#calculator-text');
	if (calc_text.innerText === '0') {
		return;
	} else if (calc_text.innerText.charAt(0) === '-') {
		calc_text.innerText = calc_text.innerText.slice(1);
	} else {
		calc_text.innerText = '-' + calc_text.innerText;
	}
	current_number = Number(calc_text.innerText);
}

function write_decimal() {
	const calc_text = document.querySelector('#calculator-text');
	if (!calc_text.innerText.includes('.')) {
		calc_text.innerText = calc_text.innerText + '.';
	}
	current_number = Number(calc_text.innerText);
}

function get_num_digits(num) {
	let count = 0;
	num = String(num);
	for (let i = 0; i < num.length; i++) {
		if (!isNaN(num.charAt(i))) {
			count++;
		}
	}
	return count;
}

function trunc_num(num) {
	if (get_num_digits(num) > MAX_NUMS_DISPLAYED) {
		console.log(num);
		num = num.toExponential(MAX_NUMS_DISPLAYED - 5);
	}
	return num;
}

function display_operation(operation) {
	if (previous_number === null) {
		return current_number;
	}

	let result = 0;
	const calc_text = document.querySelector('#calculator-text');
	switch (operation) {
		case 'add':
			result = current_number + previous_number;
			break;
		case 'subtract':
			console.log({ previous_number, current_number });
			result = previous_number - current_number;
			break;
		case 'multiply':
			result = current_number * previous_number;
			break;
		case 'divide':
			if (current_number === 0) {
				calc_text.innerText = 'nice one';
				previous_number = 0;
				return 0;
			} else {
				result = previous_number / current_number;
			}
			break;
	}
	result = trunc_num(result);
	calc_text.innerText = result + '';
	return result;
}

function add() {
	operation_pressed = true;
	previous_number = display_operation(current_operation);
	current_operation = 'add';
}

function subtract() {
	operation_pressed = true;
	previous_number = display_operation(current_operation);
	current_operation = 'subtract';
}

function multiply() {
	operation_pressed = true;
	previous_number = display_operation(current_operation);
	current_operation = 'multiply';
}

function divide() {
	operation_pressed = true;
	previous_number = display_operation(current_operation);
	current_operation = 'divide';
}

function sqrt() {
	current_number = trunc_num(Math.sqrt(current_number));
	document.querySelector('#calculator-text').innerText = '';
	write_to_screen(current_number);
}

function equals() {
	console.log(current_operation);
	switch (current_operation) {
		case 'add':
			current_number = display_operation('add');
			break;
		case 'subtract':
			current_number = display_operation('subtract');
			break;
		case 'multiply':
			current_number = display_operation('multiply');
			break;
		case 'divide':
			current_number = display_operation('divide');
			break;
		case 'sqrt':
			current_number = display_operation('sqrt');
	}
	previous_number = null;
	operation_pressed = true;
	current_operation = 'equals';
}

function init_number_buttons() {
	const number_btns = document.querySelectorAll('.number-btn');

	number_btns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const num_value = extract_number_from_id(btn.id);
			write_to_screen(num_value);
		});
	});
}

function init_back_button() {
	document.querySelector('#back-btn').addEventListener('click', () => {
		pop_screen_right();
	});
}

function init_clear_button() {
	document.querySelector('#clear-btn').addEventListener('click', () => {
		clear_screen();
	});
}

function init_sign_button() {
	document.querySelector('#sign-btn').addEventListener('click', () => {
		toggle_sign();
	});
}

function init_decimal_button() {
	document.querySelector('#decimal-btn').addEventListener('click', () => {
		write_decimal();
	});
}

function init_add_button() {
	document.querySelector('#add-btn').addEventListener('click', () => {
		add();
	});
}

function init_subtract_button() {
	document.querySelector('#subtract-btn').addEventListener('click', () => {
		subtract();
	});
}
function init_multiply_button() {
	document.querySelector('#multiply-btn').addEventListener('click', () => {
		multiply();
	});
}
function init_divide_button() {
	document.querySelector('#divide-btn').addEventListener('click', () => {
		divide();
	});
}

function init_equals_button() {
	document.querySelector('#equals-btn').addEventListener('click', () => {
		equals();
	});
}

function init_sqrt_button() {
	document.querySelector('#sqrt-btn').addEventListener('click', () => {
		sqrt();
	});
}

function init_operation_buttons() {
	init_add_button();
	init_subtract_button();
	init_multiply_button();
	init_divide_button();
	init_sqrt_button();
	init_equals_button();
}

function init_buttons() {
	init_number_buttons();
	init_back_button();
	init_clear_button();
	init_sign_button();
	init_decimal_button();
	init_operation_buttons();
}

function main() {
	init_buttons();
}

window.addEventListener('load', () => {
	main();
});
