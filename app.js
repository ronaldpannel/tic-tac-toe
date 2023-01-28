const squares = document.querySelectorAll(".grid div");
const displayCurrentPlayer = document.getElementById("currentPlayer");
const result = document.getElementById("result");
let currentPlayer = "O";
let gameState = true

const winningArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkResult() {
  for (let i = 0; i < winningArrays.length; i++) {
    const square1 = squares[winningArrays[i][0]];
    const square2 = squares[winningArrays[i][1]];
    const square3 = squares[winningArrays[i][2]];

    if (
      square1.classList.contains("nought") &&
      square2.classList.contains("nought") &&
      square3.classList.contains("nought")
    ) {
      result.innerHTML = "Nought's Wins";
      gameState = false
    }
    if (
      square1.classList.contains("cross") &&
      square2.classList.contains("cross") &&
      square3.classList.contains("cross")
    ) {
      result.innerHTML = "Crosses Wins";
       gameState = false;
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("pointerdown", function (e) {
    if (currentPlayer == "O" && !squares[i].classList.contains("taken") && gameState) {
      squares[i].classList.add("taken");
      squares[i].classList.add("nought");
      currentPlayer = "X";
      displayCurrentPlayer.innerHTML = 'Crosses';
      console.log(currentPlayer);
    } else if (currentPlayer == "X") {
      squares[i].classList.add("taken");
      squares[i].classList.add("cross");
      currentPlayer = "O";
      displayCurrentPlayer.innerHTML = 'Noughts';
    } else {
      alert("You Cannot Go Here");
    }
    checkResult();
  });
}
startBtn.addEventListener("click", function () {
  location.reload();
});
