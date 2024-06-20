let numbSquares=6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let cDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");


function startGame() {
    cDisplay.textContent = pickedColor;
	putUpSquares();
	reset();
}
startGame();

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
				this.style.backgroundColor = "#00000";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

