const capitalize = require('../functions/capitalize');

test('Capitalize generic word', () => {
	expect(capitalize('hello')).toBe('Hello');
});

test('Empty string', () => {
	expect(capitalize('')).toBe('');
});

test('Capitalize number', () => {
	expect(() => capitalize(0)).toThrow('Not a string');
});

test('One letter string', () => {
	expect(capitalize('A')).toBe('A');
});

test('First letter not an alpha', () => {
	expect(capitalize('1word')).toBe('1word');
});

test('All capitals', () => {
	expect(capitalize('ABC')).toBe('ABC');
});

test('First letter already capital', () => {
	expect(capitalize('Hello')).toBe('Hello');
});
