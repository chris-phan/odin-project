const capitalize = (str) => {
	if (str.length == 0) {
		return '';
	} else if (typeof str !== 'string') {
		throw new Error('Not a string');
	}

	return str[0].toUpperCase() + str.slice(1);
};

module.exports = capitalize;
