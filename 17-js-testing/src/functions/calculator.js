const calculator = (() => {
	const add = (num1, num2) => {
		if (typeof num1 !== 'number') {
			throw new Error('num1 is not a number');
		} else if (typeof num2 !== 'number') {
			throw new Error('num2 is not a number');
		}

		return num1 + num2;
	};

	const subtract = (num1, num2) => {
		if (typeof num1 !== 'number') {
			throw new Error('num1 is not a number');
		} else if (typeof num2 !== 'number') {
			throw new Error('num2 is not a number');
		}

		return num1 - num2;
	};

	const multiply = (num1, num2) => {
		if (typeof num1 !== 'number') {
			throw new Error('num1 is not a number');
		} else if (typeof num2 !== 'number') {
			throw new Error('num2 is not a number');
		}

		return num1 * num2;
	};

	const divide = (num1, num2) => {
		if (typeof num1 !== 'number') {
			throw new Error('num1 is not a number');
		} else if (typeof num2 !== 'number') {
			throw new Error('num2 is not a number');
		} else if (num2 === 0) {
			throw new Error('Cannot divide by 0');
		}

		return num1 / num2;
	};

	return { add, subtract, multiply, divide };
})();

module.exports = calculator;
