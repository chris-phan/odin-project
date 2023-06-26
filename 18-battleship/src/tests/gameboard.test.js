const Gameboard = require('../components/gameboard');
const Ship = require('../components/ship');

const standard_ships = {
	destroyer: Ship(2),
	submarine: Ship(3),
	cruiser: Ship(3),
	battleship: Ship(4),
	carrier: Ship(5),
};

test('Placing ships', () => {
	const gb = Gameboard();
	gb.place_ship(standard_ships.destroyer, 0, 0, 0, 1);
	gb.place_ship(standard_ships.submarine, 3, 4, 5, 4);
	gb.place_ship(standard_ships.cruiser, 6, 7, 6, 9);
	gb.place_ship(standard_ships.battleship, 9, 4, 6, 4);
	gb.place_ship(standard_ships.carrier, 3, 6, 7, 6);

	expect(gb.grid[0][0]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[0][1]).toBe(gb.SQUARE_SHIP);

	expect(gb.grid[3][4]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[4][4]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[5][4]).toBe(gb.SQUARE_SHIP);

	expect(gb.grid[6][7]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[6][8]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[6][9]).toBe(gb.SQUARE_SHIP);

	expect(gb.grid[9][4]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[8][4]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[7][4]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[6][4]).toBe(gb.SQUARE_SHIP);

	expect(gb.grid[3][6]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[4][6]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[5][6]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[6][6]).toBe(gb.SQUARE_SHIP);
	expect(gb.grid[7][6]).toBe(gb.SQUARE_SHIP);
});

test('Place out of bounds', () => {
	const gb = Gameboard();
	expect(() => gb.place_ship(standard_ships.battleship, -1, 0, 2, 0)).toThrow(
		'Cannot place ship out of bounds'
	);
	expect(() => gb.place_ship(standard_ships.destroyer, 10, 0, 9, 0)).toThrow(
		'Cannot place ship out of bounds'
	);
	expect(() => gb.place_ship(standard_ships.submarine, 0, -1, 0, 1)).toThrow(
		'Cannot place ship out of bounds'
	);
	expect(() => gb.place_ship(standard_ships.carrier, 0, 10, 0, 6)).toThrow(
		'Cannot place ship out of bounds'
	);

	const grid = gb.grid;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			expect(grid[r][c]).toBe(gb.SQUARE_EMPTY);
		}
	}
});

test('Place diagonal', () => {
	const gb = Gameboard();

	expect(() => gb.place_ship(standard_ships.battleship, 0, 0, 3, 3)).toThrow(
		'Cannot place ship diagonally'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 3, 3, 0, 0)).toThrow(
		'Cannot place ship diagonally'
	);
});

test('Place distance too large', () => {
	const gb = Gameboard();

	expect(() => gb.place_ship(standard_ships.battleship, 0, 0, 4, 0)).toThrow(
		'Selected start and end are too large for this ship'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 4, 0, 0, 0)).toThrow(
		'Selected start and end are too large for this ship'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 0, 0, 0, 4)).toThrow(
		'Selected start and end are too large for this ship'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 0, 4, 0, 0)).toThrow(
		'Selected start and end are too large for this ship'
	);
});

test('Place distance too small', () => {
	const gb = Gameboard();

	expect(() => gb.place_ship(standard_ships.battleship, 0, 0, 2, 0)).toThrow(
		'Selected start and end are too small for this ship'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 2, 0, 0, 0)).toThrow(
		'Selected start and end are too small for this ship'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 0, 0, 0, 2)).toThrow(
		'Selected start and end are too small for this ship'
	);
	expect(() => gb.place_ship(standard_ships.battleship, 0, 2, 0, 0)).toThrow(
		'Selected start and end are too small for this ship'
	);
});

test('Hit ship', () => {
	const gb = Gameboard();

	gb.place_ship(standard_ships.battleship, 1, 1, 1, 4);
	gb.receive_attack(1, 1);
	gb.receive_attack(1, 2);
	gb.receive_attack(1, 3);
	gb.receive_attack(1, 4);

	const hit_spaces = [
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
	];

	const grid = gb.grid;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			let found_ship = false;
			for (let i = 0; i < hit_spaces.length; i++) {
				if (hit_spaces[i][0] === r && hit_spaces[i][1] === c) {
					expect(grid[r][c]).toBe(gb.SQUARE_SHIP_HIT);
					found_ship = true;
					break;
				}
			}
			if (!found_ship) {
				expect(grid[r][c]).toBe(gb.SQUARE_EMPTY);
			}
		}
	}
});

test('Miss ship', () => {
	const gb = Gameboard();

	gb.place_ship(standard_ships.battleship, 1, 1, 1, 4);

	const grid = gb.grid;

	const ship_spaces = [
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
	];

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			let found_ship = false;
			for (let i = 0; i < ship_spaces.length; i++) {
				if (ship_spaces[i][0] === r && ship_spaces[i][1] === c) {
					found_ship = true;
					break;
				}
			}
			if (!found_ship) {
				gb.receive_attack(r, c);
			}
		}
	}

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			let found_ship = false;
			for (let i = 0; i < ship_spaces.length; i++) {
				if (ship_spaces[i][0] === r && ship_spaces[i][1] === c) {
					expect(grid[r][c]).toBe(gb.SQUARE_SHIP);
					found_ship = true;
					break;
				}
			}
			if (!found_ship) {
				expect(grid[r][c]).toBe(gb.SQUARE_HIT);
			}
		}
	}
});

test('Place all ships randomly', () => {
	const NUM_ITERATIONS = 50;
	const all_ships = Object.values(standard_ships);
	let total_ship_lengths = 0;
	all_ships.forEach((ship) => {
		total_ship_lengths += ship.length;
	});

	// Places ships randomly NUM_ITERATIONS times
	// Counts all the squares marked as a ship in the gameboard grid
	// Method works if the end count is the same as the sum of all ship lengths
	for (let i = 0; i < NUM_ITERATIONS; i++) {
		const gb = Gameboard();
		gb.place_all_random(all_ships);

		const grid = gb.grid;
		let count = 0;
		for (let r = 0; r < grid.length; r++) {
			for (let c = 0; c < grid.length; c++) {
				if (grid[r][c] === gb.SQUARE_SHIP) {
					count += 1;
				}
			}
		}

		expect(count).toBe(total_ship_lengths);
	}
});

test('Check lose', () => {
	const gb = Gameboard();
	gb.place_all_random(Object.values(standard_ships));
	const grid = gb.grid;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			gb.receive_attack(r, c);
		}
	}
	expect(gb.check_lose()).toBe(true);
});

test('Check still playing', () => {
	const NUM_ITERATIONS = 50;
	const all_ships = Object.values(standard_ships);
	let total_ship_lengths = 0;
	all_ships.forEach((ship) => {
		total_ship_lengths += ship.length;
	});

	for (let i = 0; i < NUM_ITERATIONS; i++) {
		const gb = Gameboard();
		gb.place_all_random(all_ships);
		const grid = gb.grid;

		// Attack the board total_ship_lengths - 1 times
		// Guarantees that there will be at least be a ship that survives
		for (let j = 0; j < total_ship_lengths - 1; j++) {
			const rand_row = Math.floor(Math.random() * grid.length);
			const rand_col = Math.floor(Math.random() * grid[0].length);
			gb.receive_attack(rand_row, rand_col);
		}

		expect(gb.check_lose()).toBe(false);
	}
});
