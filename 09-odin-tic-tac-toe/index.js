const BOARD_NUM_ROWS = 3;
const BOARD_NUM_COLS = 3;
const MAX_NUM_MOVES = BOARD_NUM_ROWS * BOARD_NUM_COLS;
const TIE_STRING = 'TIE';
const PLAYER1_STRING = 'PLAYER1';
const PLAYER2_STRING = 'PLAYER2';
const PLAYER1_MARKER = 'X';
const PLAYER2_MARKER = 'O';
const BOT_BINKY_STRING = 'BINKY';
const BOT_ALAN_STRING = 'ALAN';

function Board() {
	let board = [];

	const init_board = () => {
		board = [];
		for (let i = 0; i < BOARD_NUM_ROWS; i++) {
			board.push([]);
			for (let j = 0; j < BOARD_NUM_COLS; j++) {
				board[i].push('');
			}
		}
	};

	const cell_is_available = (row, col) => {
		return board[row][col] === '';
	};

	const mark_cell = (row, col, marker) => {
		board[row][col] = marker;
	};

	const __get_column = (col_num) => {
		let target_column = [];
		for (let i = 0; i < board.length; i++) {
			target_column.push(board[i][col_num]);
		}
		return target_column;
	};

	const __get_diagonals = () => {
		let top_left_bot_right_diag = [];
		for (let i = 0; i < board.length; i++) {
			top_left_bot_right_diag.push(board[i][i]);
		}

		let top_right_bot_left_diag = [];
		for (let i = 0; i < board.length; i++) {
			top_right_bot_left_diag.push(board[i][board.length - i - 1]);
		}

		return [top_left_bot_right_diag, top_right_bot_left_diag];
	};

	const __is_content_all_same = (container) => {
		const marker_to_match = container[0];
		const matches = container.filter((item) => {
			return item === marker_to_match;
		});
		if (matches.length < container.length || marker_to_match === '') {
			return false;
		}
		return true;
	};

	const __check_horizontal_win = () => {
		for (let i = 0; i < board.length; i++) {
			if (__is_content_all_same(board[i])) {
				return board[i][0];
			}
		}
		return null;
	};

	const __check_vertical_win = () => {
		for (let i = 0; i < board[0].length; i++) {
			const col = __get_column(i);
			if (__is_content_all_same(col)) {
				return col[0];
			}
		}
		return null;
	};

	const __check_diagonal_win = () => {
		const diagonals = __get_diagonals();
		for (let i = 0; i < diagonals.length; i++) {
			if (__is_content_all_same(diagonals[i])) {
				return diagonals[i][0];
			}
		}
		return null;
	};

	const check_win = () => {
		const horiz_win = __check_horizontal_win();
		const vert_win = __check_vertical_win();
		const diag_win = __check_diagonal_win();

		if (horiz_win !== null) {
			return horiz_win;
		} else if (vert_win !== null) {
			return vert_win;
		} else if (diag_win !== null) {
			return diag_win;
		}

		// Check for tie
		let num_empty_cells = 0;
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[0].length; j++) {
				if (board[i][j] === '') {
					num_empty_cells++;
				}
			}
		}
		if (num_empty_cells === 0) {
			return TIE_STRING;
		}
		return null;
	};

	const get_board = () => {
		return board;
	};

	return {
		get_board,
		init_board,
		cell_is_available,
		mark_cell,
		check_win,
	};
}

function player_factory(name, marker, number) {
	let score = 0;

	const increment_score = () => {
		score++;
	};

	const get_score = () => {
		return score;
	};

	const set_score = (num) => {
		score = num;
	};

	return { name, marker, number, increment_score, get_score, set_score };
}

function GameController() {
	let board = Board();
	let players = [];
	let starting_player_num = 1;
	let current_player_num = 1;
	let num_moves = 0;
	let winner = '';
	let cpu_opponent = '';

	const pick_starting_player = () => {
		// Pick random integer [1, 2] (coin flip)
		return Math.floor(Math.random() * 2) + 1;
	};

	const switch_players = () => {
		if (current_player_num === 1) {
			current_player_num = 2;
		} else {
			current_player_num = 1;
		}
	};

	// player_num: either 1 or 2
	const get_player = (player_num) => {
		if (player_num == 1 || player_num == 2) {
			return players[player_num - 1];
		}
		return null;
	};

	const get_current_player = () => {
		return get_player(current_player_num);
	};

	const set_winner = () => {
		winner = current_player_num === 1 ? get_player(1) : get_player(2);
		winner.increment_score();
		return winner;
	};

	const get_winner = () => {
		return winner;
	};

	const play_move = (row, col) => {
		if (!board.cell_is_available(row, col)) {
			return false;
		}

		const current_player = get_current_player();
		board.mark_cell(row, col, current_player.marker);
		num_moves++;
		if (board.check_win() !== null && board.check_win() !== TIE_STRING) {
			set_winner();
		} else if (num_moves === MAX_NUM_MOVES) {
			winner = TIE_STRING;
		} else {
			if (cpu_opponent !== '') {
				make_cpu_move();
			} else {
				switch_players();
			}
		}
		return true;
	};

	// Returns array of pairs: [row, col]
	const get_available_cells = () => {
		let available_cells = [];
		const cur_board = board.get_board();
		for (let i = 0; i < cur_board.length; i++) {
			for (let j = 0; j < cur_board[0].length; j++) {
				if (cur_board[i][j] === '') {
					available_cells.push([i, j]);
				}
			}
		}
		return available_cells;
	};

	const pick_random_cell = () => {
		const available_cells_coords = get_available_cells();
		const rand_index = Math.floor(
			Math.random() * available_cells_coords.length
		);
		return available_cells_coords[rand_index];
	};

	const pick_best_cell = () => {
		const available_cells_coords = get_available_cells();
		let best_score = -Infinity;
		let best_move;
		for (let i = 0; i < available_cells_coords.length; i++) {
			const row = available_cells_coords[i][0];
			const col = available_cells_coords[i][1];
			board.mark_cell(row, col, PLAYER2_MARKER);
			const score = minimax(board, 0, false);
			board.mark_cell(row, col, '');
			if (score > best_score) {
				best_score = score;
				best_move = [row, col];
			}
		}
		return best_move;
	};

	const minimax = (board, depth, is_maximizing) => {
		const scores = {
			X: -1,
			O: 1,
			TIE: 0,
		};
		const result = board.check_win();
		if (result !== null) {
			return scores[result];
		}
		if (is_maximizing) {
			let best_score = -Infinity;
			const available_cells_coords = get_available_cells();
			for (let i = 0; i < available_cells_coords.length; i++) {
				const row = available_cells_coords[i][0];
				const col = available_cells_coords[i][1];
				board.mark_cell(row, col, PLAYER2_MARKER);
				const score = minimax(board, depth + 1, false);
				board.mark_cell(row, col, '');
				best_score = Math.max(best_score, score);
			}
			return best_score;
		} else {
			let best_score = Infinity;
			const available_cells_coords = get_available_cells();
			for (let i = 0; i < available_cells_coords.length; i++) {
				const row = available_cells_coords[i][0];
				const col = available_cells_coords[i][1];
				board.mark_cell(row, col, PLAYER1_MARKER);
				const score = minimax(board, depth + 1, true);
				board.mark_cell(row, col, '');
				best_score = Math.min(best_score, score);
			}
			return best_score;
		}
	};

	const make_cpu_move = () => {
		if (cpu_opponent === BOT_BINKY_STRING) {
			const rand_cell = pick_random_cell();
			board.mark_cell(rand_cell[0], rand_cell[1], PLAYER2_MARKER);
		} else if (cpu_opponent === BOT_ALAN_STRING) {
			const best_cell = pick_best_cell();
			board.mark_cell(best_cell[0], best_cell[1], PLAYER2_MARKER);
		}
		num_moves++;
		if (board.check_win() !== null && board.check_win() !== TIE_STRING) {
			current_player_num = 2;
			set_winner();
		} else if (num_moves === MAX_NUM_MOVES) {
			winner = TIE_STRING;
		}
		current_player_num = 1;
	};

	const set_player = (player_num, name) => {
		if (player_num === 1) {
			players[0] = player_factory(name, PLAYER1_MARKER, 1);
		} else {
			players[1] = player_factory(name, PLAYER2_MARKER, 2);
		}
	};

	const init_players = () => {
		if (players.length === 0) {
			const player1 = player_factory('Player 1', PLAYER1_MARKER, 1);
			const player2 = player_factory('Player 2', PLAYER2_MARKER, 2);
			players = [player1, player2];
		}
	};

	const new_game = () => {
		board.init_board();
		num_moves = 0;
		// starting_player_num = pick_starting_player();
		// current_player_num = starting_player_num;
		current_player_num = 1;
		winner = '';
	};

	const set_cpu_opponent = (opponent) => {
		cpu_opponent = opponent;
	};

	const get_cpu_opponent = () => {
		return cpu_opponent;
	};

	const get_board = () => {
		return board.get_board();
	};

	return {
		pick_starting_player,
		play_move,
		get_winner,
		set_player,
		get_player,
		init_players,
		get_current_player,
		new_game,
		set_cpu_opponent,
		get_cpu_opponent,
		get_board,
	};
}

function DisplayController() {
	let game_controller = GameController();

	const display_score = (player) => {
		if (player === TIE_STRING) {
			return;
		}

		const player_score = document.querySelector(
			`.player${player.number}-score`
		);

		player_score.innerText = player.get_score();
	};

	const disable_board = () => {
		document.querySelectorAll('.board-cell').forEach((btn) => {
			btn.disabled = true;
		});
	};

	const display_winner = (winner) => {
		let result = '';
		if (winner === 'TIE') {
			result = 'Game ended in a tie!';
		} else {
			const winning_player = game_controller.get_winner();
			result = `${winning_player.name} wins!`;
		}
		document.querySelector('.result-text').innerText = result;
		display_score(winner);
		disable_board();
	};

	const display_board = () => {
		const board = game_controller.get_board();
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[0].length; j++) {
				if (board[i][j] !== '') {
					const board_cell = document.querySelector(
						`[data-row="${i}"][data-col="${j}"]`
					);
					board_cell.innerText = board[i][j];
				}
			}
		}
	};

	const play_move = (e) => {
		const current_player = game_controller.get_current_player();
		const row = parseInt(e.target.getAttribute('data-row'));
		const col = parseInt(e.target.getAttribute('data-col'));
		if (game_controller.play_move(row, col)) {
			e.target.innerText = current_player.marker;
			if (game_controller.get_cpu_opponent() !== '') {
				display_board();
			}
		}

		const winner = game_controller.get_winner();
		if (winner !== '') {
			display_winner(winner);
		}
	};

	const init_board_cell = (cell, row, col) => {
		cell.classList.add('board-cell');
		cell.setAttribute('data-row', row);
		cell.setAttribute('data-col', col);
		cell.addEventListener('click', (e) => {
			play_move(e);
		});
	};

	const clear_result_text = () => {
		const result_text = document.querySelector('.result-text');
		result_text.innerText = '';
	};

	const generate_new_board = () => {
		const board_div = document.querySelector('.board');
		const old_cells = document.querySelectorAll('.board-cell');
		old_cells.forEach((cell) => cell.remove());
		let board_cells = [];
		for (let i = 0; i < BOARD_NUM_ROWS; i++) {
			board_cells.push([]);
			for (let j = 0; j < BOARD_NUM_COLS; j++) {
				const cell = document.createElement('button');
				init_board_cell(cell, i, j);
				board_div.appendChild(cell);
				board_cells[i].push(cell);
			}
		}
	};

	const handle_player_change = (e) => {
		e.preventDefault();
		const player_num = parseInt(e.target.getAttribute('data-player-num'));
		const form_data = new FormData(e.target);
		const form_props = Object.fromEntries(form_data);
		game_controller.set_player(player_num, form_props.name);
		display_player(player_num);
		display_score(game_controller.get_player(player_num));
	};

	const init_player_form = () => {
		document
			.querySelector('form.player1-change')
			.addEventListener('submit', (e) => {
				e.preventDefault();
				handle_player_change(e);
			});
		document
			.querySelector('form.player2-change')
			.addEventListener('submit', (e) => {
				handle_player_change(e);
			});
	};

	const display_player = (player_num) => {
		const player = game_controller.get_player(player_num);
		const player_name = document.querySelector(`.player${player_num}-name`);

		player_name.innerText = player.name;
	};

	const init_versus_cpu_btns = () => {
		document.querySelector('.vs-dumb-cpu').addEventListener('click', () => {
			if (game_controller.get_cpu_opponent() !== BOT_BINKY_STRING) {
				game_controller.set_cpu_opponent(BOT_BINKY_STRING);
				game_controller.set_player(2, BOT_BINKY_STRING);
				display_player(2);
				display_score(game_controller.get_player(2));
			}
			clear_result_text();
			game_controller.new_game();
			generate_new_board();
		});

		document.querySelector('.vs-good-cpu').addEventListener('click', () => {
			if (game_controller.get_cpu_opponent() !== BOT_ALAN_STRING) {
				game_controller.set_cpu_opponent(BOT_ALAN_STRING);
				game_controller.set_player(2, BOT_ALAN_STRING);
				display_player(2);
				display_score(game_controller.get_player(2));
			}
			clear_result_text();
			game_controller.new_game();
			generate_new_board();
		});
	};

	const start_game = () => {
		game_controller.init_players();
		game_controller.new_game();
		generate_new_board();
		init_player_form();
		init_new_game_button();
		init_versus_cpu_btns();
	};

	const init_new_game_button = () => {
		document.querySelector('.new-game').addEventListener('click', () => {
			new_game();
		});
	};

	const new_game = () => {
		clear_result_text();
		game_controller.new_game();
		generate_new_board();
		if (game_controller.get_cpu_opponent() !== '') {
			game_controller.set_player(2, 'Player 2');
			display_player(2);
			display_score(game_controller.get_player(2));
			game_controller.set_cpu_opponent('');
		}
	};

	return { start_game };
}

function main() {
	const display_controller = DisplayController();
	display_controller.start_game();
}

window.addEventListener('load', () => {
	main();
});
