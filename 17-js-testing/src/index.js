const capitalize = require('./functions/capitalize');
const reverse_string = require('./functions/reverse_string');
const calculator = require('./functions/calculator');
const caesar_cipher = require('./functions/caesar_cipher');
const analyze_array = require('./functions/analyze_array');

const init_capitalize_btn = () => {
	document.querySelector('.capitalize-btn').addEventListener('click', () => {
		const input = prompt('Enter a string');
		try {
			alert(capitalize(input));
		} catch (err) {
			alert(err.message);
		}
	});
};

const init_reverse_string_btn = () => {
	document
		.querySelector('.reverse-string-btn')
		.addEventListener('click', () => {
			const input = prompt('Enter a string');
			try {
				alert(reverse_string(input));
			} catch (err) {
				alert(err.message);
			}
		});
};

const verify_calculator_input = () => {
	const input = prompt('Enter two numbers separated by a space, e.g. 10 2');
	const separated_inputs = input.split(' ');

	if (separated_inputs.length !== 2) {
		alert('Invalid input');
		return null;
	}

	for (let i = 0; i < 2; i++) {
		if (isNaN(separated_inputs[i])) {
			alert('Invalid input');
			return null;
		}
	}

	return separated_inputs;
};

const init_calculator_btns = () => {
	document.querySelector('.add-btn').addEventListener('click', () => {
		const input = verify_calculator_input();
		if (input === null) {
			return;
		}

		try {
			alert(calculator.add(Number(input[0]), Number(input[1])));
		} catch (err) {
			alert(err.message);
		}
	});

	document.querySelector('.subtract-btn').addEventListener('click', () => {
		const input = verify_calculator_input();
		if (input === null) {
			return;
		}

		try {
			alert(calculator.subtract(Number(input[0]), Number(input[1])));
		} catch (err) {
			alert(err.message);
		}
	});

	document.querySelector('.multiply-btn').addEventListener('click', () => {
		const input = verify_calculator_input();
		if (input === null) {
			return;
		}

		try {
			alert(calculator.multiply(Number(input[0]), Number(input[1])));
		} catch (err) {
			alert(err.message);
		}
	});

	document.querySelector('.divide-btn').addEventListener('click', () => {
		const input = verify_calculator_input();
		if (input === null) {
			return;
		}

		try {
			alert(calculator.divide(Number(input[0]), Number(input[1])));
		} catch (err) {
			alert(err.message);
		}
	});
};

const init_caesar_cipher_btn = () => {
	document
		.querySelector('.caesar-cipher-btn')
		.addEventListener('click', () => {
			const string = prompt('Enter a string');
			const shift = prompt('Enter a number to shift your string by');

			if (isNaN(shift)) {
				alert('Invalid number');
				return;
			}

			try {
				alert(caesar_cipher(string, Number(shift)));
			} catch (err) {
				alert(err.message);
			}
		});
};

const init_analyze_array_btn = () => {
	document
		.querySelector('.analyze-array-btn')
		.addEventListener('click', () => {
			const input = prompt(
				'Enter numbers separated by a space, e.g.: 1 2 3 4 5 6 7'
			);
			const input_arr = input.split(' ');

			let num_input = [];
			input_arr.forEach((num) => {
				if (isNaN(num)) {
					alert('Invalid array');
					return;
				}
				num_input.push(Number(num));
			});

			try {
				const res = analyze_array(num_input);
				alert(
					`average: ${res.average}\nmin: ${res.min}\nmax: ${res.max}\nlength: ${res.length}`
				);
			} catch (err) {
				alert(err.message);
			}
		});
};

const init_buttons = () => {
	init_capitalize_btn();
	init_reverse_string_btn();
	init_calculator_btns();
	init_caesar_cipher_btn();
	init_analyze_array_btn();
};

function main() {
	console.log('hi');
	init_buttons();
}

window.addEventListener('load', main);
