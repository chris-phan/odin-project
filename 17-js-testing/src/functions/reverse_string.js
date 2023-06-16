const reverse_string = (str) => {
	if (typeof str !== 'string') {
		throw new Error('Not a string');
	}

	let reversed_str = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed_str += str[i];
	}

	return reversed_str;
};

module.exports = reverse_string;
