const Ship = require('../components/ship');
const Gameboard = require('../components/gameboard');

const DOM = () => {
	const SHIP_SQUARE_PX = 45;
	const standard_ships = {
		destroyer: Ship(2),
		submarine: Ship(3),
		cruiser: Ship(3),
		battleship: Ship(4),
		carrier: Ship(5),
	};

	let gb_player = Gameboard();
	let gb_cpu = Gameboard();
	let dragged_ship = '';
	let dragged_ship_square = -1;
	let is_dragged_horiz = true;
	let last_clicked_ship = false;

	let can_start_game = false;

	// Check if the last thing the user has clicked is a ship
	// This is used to prevent them from dragging other elements into the player board
	const _init_window = () => {
		window.addEventListener('mousedown', (e) => {
			const all_ship_names = Object.keys(standard_ships);
			for (let i = 0; i < all_ship_names.length; i++) {
				if (e.target.classList.contains(all_ship_names[i])) {
					last_clicked_ship = true;
					return;
				}
			}

			last_clicked_ship = false;
		});
	};

	// Checks if all ships have been placed, then starts the game
	const _init_start_game_btn = () => {
		document
			.querySelector('.start-game-btn')
			.addEventListener('click', (e) => {
				const all_ship_names = Object.keys(standard_ships);
				const ship_elements = [];
				for (let i = 0; i < all_ship_names.length; i++) {
					ship_elements.push(
						document.querySelector('.' + all_ship_names[i])
					);
				}

				for (let i = 0; i < ship_elements.length; i++) {
					// If a ship is not hidden, they haven't all been placed yet
					// and the game cannot start
					if (!ship_elements[i].classList.contains('hidden')) {
						can_start_game = false;
						return;
					}
				}
				can_start_game = true;
				e.target.disabled = true;
				gb_cpu.place_all_random(Object.values(standard_ships));
			});
	};

	const _init_attack_squares = () => {
		const squares = document.querySelectorAll('.attack-square');
		squares.forEach((square) => {
			square.addEventListener('click', (e) => {
				make_move(e);
				console.log('clicked');
			});
		});
	};

	const _init_ships = () => {
		const ships = document.querySelectorAll('.ships > div > div');
		ships.forEach((ship) => {
			ship.addEventListener('contextmenu', (e) => {
				console.log('contextmenu', e.button);
				e.preventDefault();
				e.stopPropagation();
				e.target.classList.toggle('vertical');

				const vert = document.querySelector('.ships-vertical');
				const horiz = document.querySelector('.ships-horizontal');
				if (e.target.classList.contains('vertical')) {
					vert.appendChild(ship);
					console.log(vert);
				} else {
					horiz.appendChild(ship);
				}
			});
			ship.addEventListener('mousedown', (e) => {
				// Ignore right click
				if (e.button === 2) {
					return;
				}
				last_clicked_ship = true;

				const rect = e.target.getBoundingClientRect();
				const x = e.clientX - rect.left; //x position within the element.
				const y = e.clientY - rect.top; //y position within the element.

				if (e.target.classList.contains('vertical')) {
					is_dragged_horiz = false;

					dragged_ship_square = Math.floor(y / SHIP_SQUARE_PX);

					// If click is on left or right edge, round down
					if (dragged_ship_square < 0) {
						dragged_ship_square = 0;
					} else if (
						dragged_ship_square ===
						standard_ships[e.target.classList[0]].length
					) {
						dragged_ship_square -= 1;
					}
				} else {
					is_dragged_horiz = true;

					dragged_ship_square = Math.floor(x / SHIP_SQUARE_PX);

					// If click is on left or right edge, round down
					if (dragged_ship_square < 0) {
						dragged_ship_square = 0;
					} else if (
						dragged_ship_square ===
						standard_ships[e.target.classList[0]].length
					) {
						dragged_ship_square -= 1;
					}
				}
				dragged_ship = e.target.classList[0];
			});
		});
	};

	const _init_restart_btn = () => {
		document.querySelector('.restart-btn').addEventListener('click', () => {
			// Clear boards
			document.querySelector('.player-board').innerHTML = '';
			document.querySelector('.attack-board').innerHTML = '';
			gb_player = Gameboard();
			gb_cpu = Gameboard();

			// Reset ships
			const ships = document.querySelectorAll('.ships > div > div');
			ships.forEach((ship) => {
				ship.classList.remove('hidden');
			});

			// Reset start button
			document.querySelector('.start-game-btn').disabled = false;

			// Reset variables
			dragged_ship = '';
			dragged_ship_square = -1;
			is_dragged_horiz = true;
			last_clicked_ship = false;

			can_start_game = false;

			// Display board
			_display_boards();
			_init_attack_squares();

			// Display board titles
			const player_title = document.createElement('h2');
			const attack_title = document.createElement('h2');
			player_title.textContent = 'Player board';
			attack_title.textContent = 'Attack board';
			document.querySelector('.player-board').appendChild(player_title);
			document.querySelector('.attack-board').appendChild(attack_title);

			// Clear alert text
			document.querySelector('.alert').textContent = '';
		});
	};

	const _init_info_btn = () => {
		alert_text =
			"\
			Right click on ships to rotate them vertically or horizontally.\n\
			Drag the ships onto the player board to place them.\n\
			Start the game by pressing the start game button after placing all your ships.\n\
			Click on the attack board to attack the CPU's ships.\n\
			Red means a ship has been hit and blue means that an attack has missed.\
			";

		const modal = document.querySelector('.info-modal');
		document.querySelector('.info-btn').addEventListener('click', () => {
			console.log('show modal');
			modal.showModal();
			document.querySelector('.description').textContent = alert_text;
		});

		document
			.querySelector('dialog button')
			.addEventListener('click', () => {
				modal.close();
			});
	};

	const _player_move = (e) => {
		const row = Number(e.target.getAttribute('data-row'));
		const col = Number(e.target.getAttribute('data-col'));

		// Player has already attacked this square, ignore the click
		if (!gb_cpu.receive_attack(row, col)) {
			return false;
		}

		// Wrap in an array since _update_display takes NodeList
		const attacked_square = [
			document.querySelector(
				`.attack-square[data-row="${row}"][data-col="${col}"]`
			),
		];
		_update_display(attacked_square, gb_cpu.grid[row][col]);
		return true;
	};

	// CPU's turn; generate a random coordinate to attack
	const _cpu_move = () => {
		let row = Math.floor(Math.random() * gb_player.grid.length);
		let col = Math.floor(Math.random() * gb_player.grid[0].length);

		// Keep trying until a row and col pair is found that has not been attacked before
		while (!gb_player.receive_attack(row, col)) {
			row = Math.floor(Math.random() * gb_player.grid.length);
			col = Math.floor(Math.random() * gb_player.grid[0].length);
		}

		const attacked_square = [
			document.querySelector(
				`.player-square[data-row="${row}"][data-col="${col}"]`
			),
		];
		_update_display(attacked_square, gb_player.grid[row][col]);
	};

	const make_move = (e) => {
		if (!can_start_game) {
			return;
		}
		console.log('ayayya');

		if (!_player_move(e)) {
			return;
		}

		// Check if player wins
		if (gb_cpu.check_lose()) {
			_disable_board();
			_display_win();
			return;
		}

		_cpu_move();

		// Check if player loses
		if (gb_player.check_lose()) {
			_disable_board();
			_display_lose();
			return;
		}
	};

	const _disable_board = () => {
		const player_squares = document.querySelectorAll('.player-square');
		const attack_squares = document.querySelectorAll('.attack-square');

		player_squares.forEach((sq) => {
			sq.style.pointerEvents = 'none';
		});
		attack_squares.forEach((sq) => {
			sq.style.pointerEvents = 'none';
		});
	};

	const _display_lose = () => {
		const alert_element = document.querySelector('.alert');
		alert_element.classList.remove('description');
		alert_element.textContent = 'CPU wins!';
	};

	const _display_win = () => {
		const alert_element = document.querySelector('.alert');
		alert_element.classList.remove('description');
		alert_element.textContent = 'You win!';
	};

	const _display_boards = () => {
		// Board that displays the player's ships and where the CPU attacked
		const player_board = document.querySelector('.player-board');

		// Board that displays where the user has attacked
		const attack_board = document.querySelector('.attack-board');

		for (let r = 0; r < gb_player.grid.length; r++) {
			for (let c = 0; c < gb_player.grid[0].length; c++) {
				const player_square = document.createElement('div');
				player_square.setAttribute('data-row', r + '');
				player_square.setAttribute('data-col', c + '');
				player_square.classList.add('player-square');
				player_square.classList.add('square-empty');

				// Event listeners for dragging and dropping ships
				player_square.addEventListener('dragover', (e) => {
					e.preventDefault();
				});

				player_square.addEventListener('drop', (e) => {
					e.preventDefault();
					const cur_row = Number(e.target.getAttribute('data-row'));
					const cur_col = Number(e.target.getAttribute('data-col'));

					let start_row = -1;
					let start_col = -1;
					let end_row = -1;
					let end_col = -1;
					const ship = standard_ships[dragged_ship];
					// Calculate where the ship should be placed
					if (is_dragged_horiz) {
						start_row = cur_row;
						end_row = cur_row;
						start_col = cur_col - dragged_ship_square;
						end_col = start_col + ship.length - 1;
					} else {
						start_col = cur_col;
						end_col = cur_col;
						start_row = cur_row - dragged_ship_square;
						end_row = start_row + ship.length - 1;
					}

					try {
						// Place the ship and hide it if successful
						if (
							last_clicked_ship &&
							gb_player.place_ship(
								ship,
								start_row,
								start_col,
								end_row,
								end_col
							)
						) {
							// Hide ship
							document
								.querySelector('.' + dragged_ship)
								.classList.add('hidden');
							const squares = _get_squares(
								'player-square',
								start_row,
								start_col,
								end_row,
								end_col
							);
							_update_display(squares, gb_player.SQUARE_SHIP);
						}
						console.table(gb_player.grid);
					} catch (err) {
						const alert_element = document.querySelector('.alert');
						alert_element.classList.remove('description');
						alert_element.textContent = err.message;
						setTimeout(() => {
							alert_element.textContent = '';
						}, 3000);
					}
					console.log('dropped', e.target);
					console.log(dragged_ship, dragged_ship_square);
				});

				player_board.appendChild(player_square);

				const attack_square = document.createElement('div');
				attack_square.setAttribute('data-row', r + '');
				attack_square.setAttribute('data-col', c + '');
				attack_square.classList.add('attack-square');
				attack_square.classList.add('square-empty');
				attack_board.appendChild(attack_square);
			}
		}
	};

	const _get_squares = (
		class_name,
		start_row,
		start_col,
		end_row,
		end_col
	) => {
		let squares = [];
		if (start_row === end_row) {
			// Ship is horizontal
			for (let c = start_col; c <= end_col; c++) {
				squares.push(
					document.querySelector(
						`.${class_name}[data-row="${start_row}"][data-col="${c}"]`
					)
				);
			}
		} else {
			// Ship is vertical
			for (let r = start_row; r <= end_row; r++) {
				squares.push(
					document.querySelector(
						`.${class_name}[data-row="${r}"][data-col="${start_col}"]`
					)
				);
			}
		}

		return squares;
	};

	const _update_display = (squares, option) => {
		let added_class_name = 'square-empty';
		switch (option) {
			case gb_player.SQUARE_EMPTY:
				added_class_name = 'square-empty';
				break;
			case gb_player.SQUARE_SHIP:
				added_class_name = 'square-ship';
				break;
			case gb_player.SQUARE_HIT:
				added_class_name = 'square-hit';
				break;
			case gb_player.SQUARE_SHIP_HIT:
				added_class_name = 'square-ship-hit';
				break;
		}

		squares.forEach((sq) => {
			console.log(sq.classList[1]);
			sq.classList.replace(sq.classList[1], added_class_name);
			console.log(sq.classList[1]);
		});
	};

	// Runs when object is created
	const play = () => {
		_init_window();
		_init_start_game_btn();
		_display_boards();
		_init_attack_squares();
		_init_ships();
		_init_restart_btn();
		_init_info_btn();
	};

	return { play };
};

module.exports = DOM;
