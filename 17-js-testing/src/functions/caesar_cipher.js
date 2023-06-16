const caesar_cipher = (str, shift) => {
	if (typeof str !== 'string') {
		throw new Error('First argument is not a string');
	} else if (!Number.isInteger(shift)) {
		throw new Error('Second argument is not a number');
	} else if (shift < 0) {
		throw new Error('Shift value must be 0 or positive');
	}

	let encrypted_str = '';
	for (let i = 0; i < str.length; i++) {
		encrypted_str += shift_char(str[i], shift);
	}
	return encrypted_str;
};

const shift_char = (char, shift) => {
	const A_ascii = 'A'.charCodeAt(0);
	const Z_ascii = 'Z'.charCodeAt(0);
	const a_ascii = 'a'.charCodeAt(0);
	const z_ascii = 'z'.charCodeAt(0);

	let new_char_ascii = char.charCodeAt(0);
	if (new_char_ascii >= A_ascii && new_char_ascii <= Z_ascii) {
		new_char_ascii = ((new_char_ascii + shift - A_ascii) % 26) + A_ascii;
	} else if (new_char_ascii >= a_ascii && new_char_ascii <= z_ascii) {
		new_char_ascii = ((new_char_ascii + shift - a_ascii) % 26) + a_ascii;
	} else {
		return char;
	}

	return String.fromCharCode(new_char_ascii);
};

module.exports = caesar_cipher;
