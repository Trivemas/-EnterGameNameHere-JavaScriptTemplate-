let hidden = Math.floor(Math.random() * 10 + 1);
console.log(hidden);
let guesses = 0;
let opportunities = 3;
let playerGuess;
let gameOver = false;

while (guesses < opportunities && !gameOver) {
	playerGuess = Number(prompt("Choose a number between 1 and 10"));

	if (playerGuess === hidden) {
		//player wins
		gameOver = true;
		alert("Winner!");
	} else {
		if (playerGuess < hidden) {
			alert("Greater than that!");
		} else {
			alert("Less than that!");
		}
	}
	// guesses = guesses 1;
	// guesses += 1;
	guesses++;
	// ++guesses;
}

if (!gameOver) {
	alert("noob");
}
