const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

const playerOne = {
  name: "tim",
  marker: "X",
  score: 15,
};
const playerTwo = {
  name: "jenn",
  marker: "O",
  score: 5,
};
function keepScore() {
  if (playerOne.score >= 10) {
    gameOver(playerOne);
  } else if (playerTwo.score >= 10) {
    gameOver(playerTwo);
  }
}

keepScore();

function gameOver(winningPlayer) {
  console.log("Congratulations!");
  console.log(winningPlayer.name + " is the winning player.");
}



// function printName(player) {
//   console.log(player.name);
// }
// printName(playerTwo);

// console.dir(Object);
// console.log(player1.name);
