let numbSquares=6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let cDisplay = document.querySelector("#color-display");
let p = document.querySelector("#head");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");

startGame();

function startGame() {
	putUpSquares();
	reset();
    cDisplay.textContent = pickedColor;
}

resetButton.addEventListener("click", function() {
	reset();
});

function putUpSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = "#F7418F";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function reset() {
	colors = generateColor(numbSquares);
	pickedColor = chooseColor();
	p.style.backgroundColor = "#FFFF";
	cDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		container.style.backgroundColor = color;
		p.style.backgroundColor = color;
	}
}

function chooseColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor(num) {
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
    return "#" + h + e + x;
}
