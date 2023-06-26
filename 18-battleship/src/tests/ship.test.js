const Ship = require('../components/ship');

test('Basic ship', () => {
	const ship = Ship(3);
	expect(ship.length).toBe(3);

	expect(ship.is_sunk()).toBe(false);
	ship.hit();

	expect(ship.is_sunk()).toBe(false);
	ship.hit();

	expect(ship.is_sunk()).toBe(false);
	ship.hit();

	expect(ship.is_sunk()).toBe(true);
});

test('Ship length not a number', () => {
	expect(() => Ship('haha')).toThrow('Ship length has to be a number');
});

test('Ship of length 0', () => {
	expect(() => Ship(0)).toThrow('Ship length has to be greater than 0');
});

test('Negative ship length', () => {
	expect(() => Ship(-5)).toThrow('Ship length has to be greater than 0');
});

test('Decimal ship length', () => {
	const ship = Ship(2.718281828459045);
	expect(ship.length).toBe(2);

	expect(ship.is_sunk()).toBe(false);
	ship.hit();

	expect(ship.is_sunk()).toBe(false);
	ship.hit();

	expect(ship.is_sunk()).toBe(true);
});
