let numbSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let cDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");

startGame();

function startGame() {
	reset();
    cDisplay.textContent = pickedColor;
    setUpSquares();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setUpSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			let clickedColor = rgbToHex(this.style.backgroundColor);
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				messageDisplay.style.color = "green";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			} else {
				this.style.backgroundColor = "#F7418F";
				messageDisplay.textContent = "Try Again";
				messageDisplay.style.color = "red";
			}
		});
	}
}

function reset() {
	colors = generateColors(numbSquares);
	pickedColor = chooseColor();
	cDisplay.textContent = pickedColor;
	resetButton.textContent = "New Color";
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	p.style.backgroundColor = color;
}

function chooseColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num) {
	let array = [];
	for (let i = 0; i < num; i++) {
		array.push(makeHexColor());
	}
	return array;
}

function makeHexColor() {
    let h = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let e = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    let x = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${h}${e}${x}`;
}

function rgbToHex(rgb) {
    let rgbArray = rgb.match(/\d+/g);
    let hex = "#";
    for (let i = 0; i < 3; i++) {
        hex += parseInt(rgbArray[i]).toString(16).padStart(2, '0');
    }
    return hex;
}
