/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

console.log("amongus");

let suit = "spades";
let face = "queen";
let value = 10;
let isFace = true;

let spadesAce = {
	suit: "spades",
	face: "ace",
	value: 1,
	isFace: false,
};

console.log(spadesAce.suit);
console.log(spadesAce);
