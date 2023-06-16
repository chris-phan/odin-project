const analyze_array = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error('Argument is not an array');
	}

	let min = Number.POSITIVE_INFINITY;
	let max = Number.NEGATIVE_INFINITY;
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			throw new Error(`Element at position ${i} is not a number`);
		}

		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);

		total += arr[i];
	}

	return {
		average: arr.length === 0 ? null : total / arr.length,
		min: min,
		max: max,
		length: arr.length,
	};
};

module.exports = analyze_array;
