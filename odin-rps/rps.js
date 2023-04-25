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

function get_player_choice() {
	player_move = prompt('Enter your move: (rock, paper, or scissors)');
	return player_move.toUpperCase();
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

function play_round() {
	let player_move = '';
	let cpu_move = '';
	let winner = '';

	do {
		player_move = get_player_choice();
		cpu_move = get_computer_choice();
		winner = check_win(player_move, cpu_move);

		if (winner === 'TIE') {
			console.log(`Both chose ${player_move}. Tie.`);
		}
	} while (winner === 'TIE');

	console.log(
		`You picked ${player_move} and the computer picked ${cpu_move}\n**Winner: ${winner}**`
	);

	return winner;
}

function best_of_five() {
	let player_score = 0;
	let cpu_score = 0;

	while (player_score < 3 && cpu_score < 3) {
		let winner = play_round();

		if (winner === 'CPU') {
			cpu_score++;
		} else {
			player_score++;
		}
	}

	if (player_score > cpu_score) {
		console.log(`YOU WON with a score of ${player_score} to ${cpu_score}`);
	} else {
		console.log(`CPU WON with a score of ${cpu_score} to ${player_score}`);
	}
}

function main() {
	best_of_five();
}

window.addEventListener('load', () => {
	main();
});
