const Ship = (length) => {
	if (typeof length !== 'number') {
		throw new Error('Ship length has to be a number');
	} else if (length <= 0) {
		throw new Error('Ship length has to be greater than 0');
	}

	length = Math.floor(length);
	let num_hits = 0;

	const hit = () => {
		if (!is_sunk()) {
			num_hits += 1;
		}
	};

	const is_sunk = () => {
		return num_hits === length;
	};

	return { length, hit, is_sunk };
};

module.exports = Ship;
