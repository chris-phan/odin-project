const reverse_string = require('../functions/reverse_string');

test('Generic string', () => {
	expect(reverse_string('abc')).toBe('cba');
});

test('Empty string', () => {
	expect(reverse_string('')).toBe('');
});

test('Not a string', () => {
	expect(() => reverse_string(123)).toThrow('Not a string');
});

test('One letter string', () => {
	expect(reverse_string('a')).toBe('a');
});

test('Palindrome', () => {
	expect(reverse_string('racecar')).toBe('racecar');
});

test('Long string', () => {
	expect(reverse_string('This is a long string. What will happen?')).toBe(
		'?neppah lliw tahW .gnirts gnol a si sihT'
	);
});
