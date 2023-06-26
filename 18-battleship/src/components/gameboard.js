const Gameboard = () => {
	const NUM_ROWS = 10;
	const NUM_COLS = 10;
	const SQUARE_EMPTY = 0;
	const SQUARE_SHIP = 1;
	const SQUARE_HIT = 2;
	const SQUARE_SHIP_HIT = 3;

	// Map holds "row_num col_num" : Ship object
	let ships_map = new Map();

	const _init_board = () => {
		const new_board = [];
		for (let i = 0; i < NUM_ROWS; i++) {
			new_board.push([]);
			for (let j = 0; j < NUM_COLS; j++) {
				new_board[i].push(SQUARE_EMPTY);
			}
		}
		return new_board;
	};

	let grid = _init_board();

	// Distance formula
	const _distance = (start_row, start_col, end_row, end_col) => {
		const dist = Math.sqrt(
			Math.pow(start_row - end_row, 2) + Math.pow(start_col - end_col, 2)
		);
		if (Number.isInteger(dist)) {
			return dist;
		}

		// Return -1 if distance is not an integer
		// Can happen if user tries to place a ship diagonally
		return -1;
	};

	// Returns false if ship overlaps with another ship
	// Returns true otherwise
	const place_ship = (ship, start_row, start_col, end_row, end_col) => {
		// Add one to distance to include start as part of the distance
		// i.e. if start_row = end_row = 1 and start_col = end_col = 1,
		// traditional distance formula would say that distance = 0, but we want it to be 1
		console.log('in place_ship', {
			ship,
			start_row,
			start_col,
			end_row,
			end_col,
		});
		const distance = _distance(start_row, start_col, end_row, end_col) + 1;

		// Input validation
		if (
			Math.min(start_row, start_col, end_row, end_col) < 0 ||
			Math.max(start_row, end_row) >= NUM_ROWS ||
			Math.max(start_col, end_col) >= NUM_COLS
		) {
			throw new Error('Cannot place ship out of bounds');
		} else if (distance === 0) {
			throw new Error('Cannot place ship diagonally');
		} else if (ship.length < distance) {
			throw new Error(
				'Selected start and end are too large for this ship'
			);
		} else if (ship.length > distance) {
			throw new Error(
				'Selected start and end are too small for this ship'
			);
		}

		// Place the ship on the board
		if (start_row === end_row) {
			// Ship is placed horizontally
			let cur_col = Math.min(start_col, end_col);
			let stop_col = Math.max(start_col, end_col);

			for (let c = cur_col; c <= stop_col; c++) {
				// Check if square is taken by another ship
				if (ships_map.has(`${start_row} ${c}`)) {
					return false;
				}
			}

			for (let c = cur_col; c <= stop_col; c++) {
				grid[start_row][c] = SQUARE_SHIP;
				ships_map.set(`${start_row} ${c}`, ship);
			}
		} else if (start_col == end_col) {
			// Ship is placed vertically
			let cur_row = Math.min(start_row, end_row);
			let stop_row = Math.max(start_row, end_row);

			for (let r = cur_row; r <= stop_row; r++) {
				// Check if square is taken by another ship
				if (ships_map.has(`${r} ${start_col}`)) {
					return false;
				}
			}

			for (let r = cur_row; r <= stop_row; r++) {
				grid[r][start_col] = SQUARE_SHIP;
				ships_map.set(`${r} ${start_col}`, ship);
			}
		}

		return true;
	};

	// Return false if user has already hit this square
	// Returns true otherwise
	const receive_attack = (row, col) => {
		if (
			grid[row][col] === SQUARE_HIT ||
			grid[row][col] == SQUARE_SHIP_HIT
		) {
			return false;
		}

		const key = `${row} ${col}`;
		if (ships_map.has(key)) {
			const ship = ships_map.get(key);
			ship.hit();

			ships_map.delete(key);
			grid[row][col] = SQUARE_SHIP_HIT;
		} else {
			grid[row][col] = SQUARE_HIT;
		}

		return true;
	};

	const place_all_random = (ships) => {
		for (let i = 0; i < ships.length; i++) {
			const ship = ships[i];
			let rand_coords = _generate_rand_pos(ship.length);
			place_ship(
				ship,
				rand_coords[0],
				rand_coords[1],
				rand_coords[2],
				rand_coords[3]
			);
		}
	};

	// 2 different directions (veritcal and horizontal)
	// 0 = vertical
	// 1 = horizontal
	const _generate_rand_end = (start_row, start_col, ship_length) => {
		const rand_direction = Math.floor(Math.random() * 2);
		let rand_row_end = start_row;
		let rand_col_end = start_col;
		if (rand_direction === 0) {
			// Place vertically
			rand_row_end = start_row + ship_length - 1;
		} else {
			// Place horizontally
			rand_col_end = start_col + ship_length - 1;
		}

		return [rand_row_end, rand_col_end];
	};

	// Checks if there is a ship placed in between the given rows and columns
	const _check_has_ship = (start_row, start_col, end_row, end_col) => {
		if (start_row === end_row) {
			// Ship is horizontal
			const start = Math.min(start_col, end_col);
			const end = Math.max(start_col, end_col);
			for (let c = start; c <= end; c++) {
				if (grid[start_row][c] === SQUARE_SHIP) {
					return true;
				}
			}
		} else if (start_col === end_col) {
			// Ship is vertical
			const start = Math.min(start_row, end_row);
			const end = Math.max(start_row, end_row);
			for (let r = start; r <= end; r++) {
				if (grid[r][start_col] === SQUARE_SHIP) {
					return true;
				}
			}
		}

		return false;
	};

	const _generate_rand_pos = (ship_length) => {
		let rand_start_row = 0;
		let rand_start_col = 0;
		let rand_ends = [];

		while (true) {
			rand_start_row = Math.floor(Math.random() * NUM_ROWS);
			rand_start_col = Math.floor(Math.random() * NUM_COLS);
			rand_ends = _generate_rand_end(
				rand_start_row,
				rand_start_col,
				ship_length
			);

			if (rand_ends[0] >= NUM_ROWS || rand_ends[1] >= NUM_COLS) {
				continue;
			}
			if (
				!_check_has_ship(
					rand_start_row,
					rand_start_col,
					rand_ends[0],
					rand_ends[1]
				)
			) {
				break;
			}
		}
		return [rand_start_row, rand_start_col, rand_ends[0], rand_ends[1]];
	};

	// Scans grid to see if there's still a square that has a ship
	const check_lose = () => {
		for (let r = 0; r < grid.length; r++) {
			for (let c = 0; c < grid[0].length; c++) {
				if (grid[r][c] === SQUARE_SHIP) {
					return false;
				}
			}
		}
		return true;
	};

	return {
		place_ship,
		receive_attack,
		place_all_random,
		check_lose,
		grid,
		SQUARE_EMPTY,
		SQUARE_SHIP,
		SQUARE_HIT,
		SQUARE_SHIP_HIT,
	};
};

module.exports = Gameboard;
