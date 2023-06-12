const BOARD_WIDTH = 8;
const BOARD_HEIGHT = 8;
const POSSIBLE_MOVES = [
	[1, -2],
	[2, -1],
	[2, 1],
	[1, 2],
	[-1, 2],
	[-2, 1],
	[-2, -1],
	[1, -2],
];
const MAX_POSSIBLE_MOVES = POSSIBLE_MOVES.length;
let IS_GETTING_START = true;
let START_SQUARE = [-1, -1];
let TARGET_SQUARE = [-1, -1];

const is_move_in_range = (move_x, move_y) => {
	return (
		move_x >= 0 &&
		move_x < BOARD_WIDTH &&
		move_y >= 0 &&
		move_y < BOARD_HEIGHT
	);
};

const get_next_moves = (cur_x, cur_y) => {
	let moves = [];
	for (let i = 0; i < MAX_POSSIBLE_MOVES; i++) {
		const new_move_x = cur_x + POSSIBLE_MOVES[i][0];
		const new_move_y = cur_y + POSSIBLE_MOVES[i][1];
		if (is_move_in_range(new_move_x, new_move_y)) {
			moves.push([new_move_x, new_move_y]);
		}
	}
	return moves;
};

const bfs = (board, start_x, start_y, target_x, target_y) => {
	// Queue holds [cur_x, cur_y, prev_x, prev_y, num_moves]
	let queue = [[start_x, start_y, 0, -1, -1]];

	while (queue.length > 0) {
		const cur = queue.shift();
		const cur_x = cur[0];
		const cur_y = cur[1];
		const prev_x = cur[2];
		const prev_y = cur[3];
		const cur_moves = cur[4];

		// End current search if another path is better
		// or if the current # of moves to reach the target is less than # moves
		if (
			board[cur_x][cur_y][0] < cur_moves ||
			board[target_x][target_y][0] < cur_moves
		) {
			continue;
		}

		board[cur_x][cur_y] = [cur_moves, prev_x, prev_y];

		const next_moves = get_next_moves(cur_x, cur_y);
		next_moves.forEach((move) => {
			move.push(cur_x);
			move.push(cur_y);
			move.push(cur_moves + 1);
			queue.push(move);
		});
	}
	return board;
};

const init_board = () => {
	let board = [];
	for (let i = 0; i < BOARD_WIDTH; i++) {
		board.push([]);
		for (let j = 0; j < BOARD_HEIGHT; j++) {
			// Board holds [num_moves_to_reach_square, prev_x, prev_y]
			board[i].push([Infinity, -1, -1]);
		}
	}
	return board;
};

const get_move_sequence = (board, target_x, target_y) => {
	let sequence = [];
	let cur_x = target_x;
	let cur_y = target_y;
	while (cur_x != -1 && cur_y != -1) {
		sequence.push([cur_x, cur_y]);

		const prev_x = board[cur_x][cur_y][1];
		const prev_y = board[cur_x][cur_y][2];
		cur_x = prev_x;
		cur_y = prev_y;
	}
	return sequence.reverse();
};

const display_board = () => {
	let board_element = document.querySelector('.board');
	board_element.innerHTML = '';

	let is_cell_light = true;

	for (let i = 0; i < BOARD_WIDTH; i++) {
		for (let j = 0; j < BOARD_HEIGHT; j++) {
			const cell = document.createElement('button');
			cell.classList.add('board-cell');
			if (is_cell_light) {
				cell.classList.add('light');
			} else {
				cell.classList.add('dark');
			}
			cell.setAttribute('data-row', i);
			cell.setAttribute('data-col', j);
			is_cell_light = !is_cell_light;

			cell.addEventListener('click', () => {
				if (IS_GETTING_START) {
					START_SQUARE = [i, j];
					display_user_directions('TARGET');
				} else {
					TARGET_SQUARE = [i, j];
					do_search();
					display_user_directions('');
				}
				IS_GETTING_START = !IS_GETTING_START;
			});

			board_element.appendChild(cell);
		}
		is_cell_light = !is_cell_light;
	}
};

const do_search = () => {
	let board = init_board();

	const start_x = START_SQUARE[0];
	const start_y = START_SQUARE[1];
	const target_x = TARGET_SQUARE[0];
	const target_y = TARGET_SQUARE[1];

	board = bfs(board, start_x, start_y, target_x, target_y);
	const move_sequence = get_move_sequence(board, target_x, target_y);
	display_sequence(move_sequence);
	disable_board();
};

const display_sequence = (sequence) => {
	display_knight(sequence[0]);

	for (let i = 1; i < sequence.length; i++) {
		const row = sequence[i][0];
		const col = sequence[i][1];
		const cell = document.querySelector(
			`[data-row='${row}'][data-col='${col}']`
		);

		cell.classList.add('path');
		cell.textContent = i;
	}
};

const display_knight = (position) => {
	const cell = document.querySelector(
		`[data-row='${position[0]}'][data-col='${position[1]}']`
	);
	const knight = document.createElement('img');
	knight.src = 'https://freesvg.org/img/portablejim-Chess-tile-Knight-2.png';
	knight.width = 55;
	cell.appendChild(knight);
};

const disable_board = () => {
	const cells = document.querySelectorAll('.board-cell');
	cells.forEach((cell) => {
		cell.disabled = true;
	});
};

const display_user_directions = (directions) => {
	let text = document.querySelector('.directions');
	if (directions === 'START') {
		text.textContent = 'Click a starting square';
	} else if (directions === 'TARGET') {
		text.textContent = 'Click the square you want to get to';
	} else {
		text.textContent = '';
	}
};

const reset = () => {
	IS_GETTING_START = true;
	START_SQUARE = [-1, -1];
	TARGET_SQUARE = [-1, -1];
	display_board();
	display_user_directions('START');
};

const init_reset_btn = () => {
	document.querySelector('button.reset').addEventListener('click', reset);
};

function main() {
	init_reset_btn();
	reset();
}

window.addEventListener('load', main);
