const caesar_cipher = require('../functions/caesar_cipher');

test('Basic shift by 4', () => {
	expect(caesar_cipher('hello', 4)).toBe('lipps');
});

test('Basic shift by 1', () => {
	expect(caesar_cipher('abcdefghijklmnopqrstuvwxyz', 4)).toBe(
		'efghijklmnopqrstuvwxyzabcd'
	);
});

test('Shift by 0', () => {
	expect(caesar_cipher('enigma', 0)).toBe('enigma');
});

test('Shift by negative number', () => {
	expect(() => caesar_cipher('error', -4)).toThrow(
		'Shift value must be 0 or positive'
	);
});

test('Shift by non-integer', () => {
	expect(() => caesar_cipher('error', 3.14)).toThrow('');
});

test('Shift by 26', () => {
	expect(caesar_cipher('no change', 26)).toBe('no change');
});

test('Punctuation', () => {
	expect(
		caesar_cipher('This is a pretty normal sentence. Hello from Earth.', 8)
	).toBe('Bpqa qa i xzmbbg vwzuit amvbmvkm. Pmttw nzwu Mizbp.');
});

test('Capital letters', () => {
	expect(caesar_cipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)).toBe(
		'EFGHIJKLMNOPQRSTUVWXYZABCD'
	);
});

test('All letters', () => {
	expect(
		caesar_cipher('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 4)
	).toBe('EFGHIJKLMNOPQRSTUVWXYZABCDefghijklmnopqrstuvwxyzabcd');
});
