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

//single balls

/*
multi balls
multi balls
*/
//arrays are collections of data, arrays use []

let tableOneAges = [13, 13, 13]; //for example this is an array
console.log(tableOneAges);

let agesAndNames = ["big jim", 62, "egg", 1, "ur mom", 12908310927409812987];
console.log(agesAndNames);

let dolla = "so poor that i am using a string";
console.log(dolla.toUpperCase());

// i used ctrl+k+c to make this a comment

agesAndNames.forEach((n) => {
	console.log(n);
});

let twelveAndUnder = tableOneAges.filter((n) => n < 13);

if (twelveAndUnder) {
	//do this if condition 1 is truthy (true)
} else if (dolla) {
	//do this if conditition 2 is truthy (true)
} else {
	//do this if condition 1 is falsey (false)
}

/*
Equality == (not recommended if you need it to be exact)
Strict Equality === (just use this)
Logical AND && (Both must be true to output true)
Logical OR || (One must be true to outbut true)
Negation ! (this basicaly makes things the oposite)
Greater Than >
Greater Than or Equal to >=
Less Than <
Greater Than or Equal to <=
Inequality != (basically not equals, this one not recomened use strict)
Strict Inequality (just use this also)
*/
