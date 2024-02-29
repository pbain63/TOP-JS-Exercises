const container = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const resultDiv = document.createElement("div");

//container.classList.add("container");
container.setAttribute("id", "container");
btnRock.setAttribute("id", "Rock");
btnPaper.setAttribute("id", "Paper");
btnScissors.setAttribute("id", "Scissors");
resultDiv.setAttribute("id", "result");

container.textContent = "To Play, please click any button: ";
btnRock.textContent = "ROCK";
btnPaper.textContent = "Paper";
btnScissors.textContent = "SCISSORS";

resultDiv.textContent = `Running Score: () ;
 () reach to the 5 points. () Wins!`;

btnRock.setAttribute("style", "margin: 10px; background-color: grey");
btnPaper.setAttribute("style", "margin: 10px; background-color: white");
btnScissors.setAttribute("style", "margin: 10px; background-color: silver");

document.body.appendChild(container);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(resultDiv);