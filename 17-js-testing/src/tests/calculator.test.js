const ITER_COUNT = 25;
const calculator = require('../functions/calculator');

// Add
test('Basic addition', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.add(num1, num2)).toBe(num1 + num2);
		expect(calculator.add(num2, num1)).toBe(num2 + num1);
	}
});

test('Not a number', () => {
	expect(() => calculator.add('2', 1)).toThrow('num1 is not a number');
	expect(() => calculator.add(1, '2')).toThrow('num2 is not a number');
});

test('Add 0', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = 0;
		expect(calculator.add(num1, num2)).toBe(num1 + num2);
		expect(calculator.add(num2, num1)).toBe(num2 + num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = 0;
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.add(num1, num2)).toBe(num1 + num2);
		expect(calculator.add(num2, num1)).toBe(num2 + num1);
	}
});

test('Add negative', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) * -1;
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.add(num1, num2)).toBe(num1 + num2);
		expect(calculator.add(num2, num1)).toBe(num2 + num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = Math.floor(Math.random() * 500) * -1;
		expect(calculator.add(num1, num2)).toBe(num1 + num2);
		expect(calculator.add(num2, num1)).toBe(num2 + num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) * -1;
		let num2 = Math.floor(Math.random() * 500) * -1;
		expect(calculator.add(num1, num2)).toBe(num1 + num2);
		expect(calculator.add(num2, num1)).toBe(num2 + num1);
	}
});

// Subtract
test('Basic subtraction', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
		expect(calculator.subtract(num2, num1)).toBe(num2 - num1);
	}
});

test('Not a number', () => {
	expect(() => calculator.subtract('2', 1)).toThrow('num1 is not a number');
	expect(() => calculator.subtract(1, '2')).toThrow('num2 is not a number');
});

test('Subtract 0', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = 0;
		expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
		expect(calculator.subtract(num2, num1)).toBe(num2 - num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = 0;
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
		expect(calculator.subtract(num2, num1)).toBe(num2 - num1);
	}
});

test('Subtract negative', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) * -1;
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
		expect(calculator.subtract(num2, num1)).toBe(num2 - num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = Math.floor(Math.random() * 500) * -1;
		expect(calculator.subtract(num2, num1)).toBe(num2 - num1);
		expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) * -1;
		let num2 = Math.floor(Math.random() * 500) * -1;
		expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
		expect(calculator.subtract(num2, num1)).toBe(num2 - num1);
	}
});

// Multiplication
test('Basic multiplication', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
		expect(calculator.multiply(num2, num1)).toBe(num2 * num1);
	}
});

test('Not a number', () => {
	expect(() => calculator.multiply('2', 1)).toThrow('num1 is not a number');
	expect(() => calculator.multiply(1, '2')).toThrow('num2 is not a number');
});

test('Multiply by 0', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = 0;
		expect(calculator.multiply(num1, num2)).toBe(0);
		expect(calculator.multiply(num2, num1)).toBe(0);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = 0;
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.multiply(num1, num2)).toBe(0);
		expect(calculator.multiply(num2, num1)).toBe(0);
	}
});

test('Multiply negative', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) * -1;
		let num2 = Math.floor(Math.random() * 500);
		expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
		expect(calculator.multiply(num2, num1)).toBe(num2 * num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500);
		let num2 = Math.floor(Math.random() * 500) * -1;
		expect(calculator.multiply(num2, num1)).toBe(num2 * num1);
		expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) * -1;
		let num2 = Math.floor(Math.random() * 500) * -1;
		expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
		expect(calculator.multiply(num2, num1)).toBe(num2 * num1);
	}
});

// Division
test('Basic division', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) + 1;
		let num2 = Math.floor(Math.random() * 500) + 1;
		expect(calculator.divide(num1, num2)).toBeCloseTo(num1 / num2);
		expect(calculator.divide(num2, num1)).toBeCloseTo(num2 / num1);
	}
});

test('Not a number', () => {
	expect(() => calculator.multiply('2', 1)).toThrow('num1 is not a number');
	expect(() => calculator.multiply(1, '2')).toThrow('num2 is not a number');
});

test('Division: 0', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) + 1;
		let num2 = 0;
		expect(() => calculator.divide(num1, num2)).toThrow(
			'Cannot divide by 0'
		);
		expect(calculator.divide(num2, num1)).toBe(0);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = 0;
		let num2 = Math.floor(Math.random() * 500) + 1;
		expect(calculator.divide(num1, num2)).toBe(0);
		expect(() => calculator.divide(num2, num1)).toThrow(
			'Cannot divide by 0'
		);
	}
});

test('Divide negative', () => {
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = (Math.floor(Math.random() * 500) + 1) * -1;
		let num2 = Math.floor(Math.random() * 500) + 1;
		expect(calculator.divide(num1, num2)).toBeCloseTo(num1 / num2);
		expect(calculator.divide(num2, num1)).toBeCloseTo(num2 / num1);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = Math.floor(Math.random() * 500) + 1;
		let num2 = (Math.floor(Math.random() * 500) + 1) * -1;
		expect(calculator.divide(num2, num1)).toBeCloseTo(num2 / num1);
		expect(calculator.divide(num1, num2)).toBeCloseTo(num1 / num2);
	}
	for (let i = 0; i < ITER_COUNT; i++) {
		let num1 = (Math.floor(Math.random() * 500) + 1) * -1;
		let num2 = (Math.floor(Math.random() * 500) + 1) * -1;
		expect(calculator.divide(num1, num2)).toBeCloseTo(num1 / num2);
		expect(calculator.divide(num2, num1)).toBeCloseTo(num2 / num1);
	}
});
