const WIN_CONDITION = 5;

function get_computer_choice() {
	choice = Math.floor(Math.random() * 3);
	cpu_move = '';

	switch (choice) {
		case 0:
			cpu_move = 'ROCK';
			break;
		case 1:
			cpu_move = 'PAPER';
			break;
		case 2:
			cpu_move = 'SCISSORS';
			break;
		default:
			cpu_move = 'ROCK';
	}

	return cpu_move;
}

function check_win(player_move, cpu_move) {
	let winner = '';

	if (player_move === cpu_move) {
		winner = 'TIE';
	} else if (
		(cpu_move === 'ROCK' && player_move === 'SCISSORS') ||
		(cpu_move === 'PAPER' && player_move === 'ROCK') ||
		(cpu_move === 'SCISSORS' && player_move === 'PAPER')
	) {
		winner = 'CPU';
	} else {
		winner = 'PLAYER';
	}

	return winner;
}

function display_winner() {
	let overall_winner_h2_tag = document.querySelector('#overall-winner');
	let player_score = Number(
		document.querySelector('#player-score').innerText
	);
	let cpu_score = Number(document.querySelector('#cpu-score').innerText);

	if (player_score > cpu_score) {
		overall_winner_h2_tag.innerText = `YOU WON with a score of ${player_score} to ${cpu_score}`;
	} else {
		overall_winner_h2_tag.innerText = `CPU WON with a score of ${cpu_score} to ${player_score}`;
	}
}

function increment_score(winner) {
	let score = -1;

	if (winner === 'CPU') {
		cpu_score_tag = document.querySelector('#cpu-score');
		score = Number(cpu_score_tag.innerText) + 1;
		cpu_score_tag.innerText = score + '';
	} else {
		player_score_tag = document.querySelector('#player-score');
		score = Number(player_score_tag.innerText) + 1;
		player_score_tag.innerText = score + '';
	}

	if (score === WIN_CONDITION) {
		disable_player_choice_btns();
		display_winner();
	}
}

function play_round(player_move) {
	let cpu_move = '';
	let winner = '';

	cpu_move = get_computer_choice();
	winner = check_win(player_move, cpu_move);

	player_choice_tag = document.querySelector('#player-choice');
	cpu_choice_tag = document.querySelector('#cpu-choice');
	winner_tag = document.querySelector('#winner');

	player_choice_tag.innerText = player_move;
	cpu_choice_tag.innerText = cpu_move;
	winner_tag.innerText = winner;

	if (winner !== 'TIE') {
		increment_score(winner);
	}

	return winner;
}

function add_player_choice_events() {
	buttons = document.querySelectorAll('button');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			play_round(button.innerText);
		});
	});
}

function disable_player_choice_btns() {
	buttons = document.querySelectorAll('button');

	buttons.forEach((button) => {
		button.disabled = true;
	});
}

function main() {
	add_player_choice_events();
}

window.addEventListener('load', () => {
	main();
});
