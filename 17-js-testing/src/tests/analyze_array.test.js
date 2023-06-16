const analyze_array = require('../functions/analyze_array');

test('Basic array', () => {
	expect(analyze_array([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

test('Empty array', () => {
	expect(analyze_array([])).toEqual({
		average: null,
		min: Number.POSITIVE_INFINITY,
		max: Number.NEGATIVE_INFINITY,
		length: 0,
	});
});

test('Invalid array', () => {
	expect(() => analyze_array([1, 2, 3, '4', 5, 6])).toThrow(
		/Element at position \d+ is not a number/
	);
});

test('Not an array', () => {
	expect(() => analyze_array(1)).toThrow('Argument is not an array');
});

test('Array of all same numbers', () => {
	expect(analyze_array([5, 5, 5, 5, 5, 5, 5, 5, 5])).toEqual({
		average: 5,
		min: 5,
		max: 5,
		length: 9,
	});
});

test('Decimal average', () => {
	const res = analyze_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	expect(res.average).toBeCloseTo(5.5);
	expect(res.min).toBe(1);
	expect(res.max).toBe(10);
	expect(res.length).toBe(10);
});
