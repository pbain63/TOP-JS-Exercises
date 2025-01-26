function createGame(gameName) {
  let score = 0;

  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}
const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");
// hockeyGame();
console.log(hockeyGame());
console.log(soccerGame());

