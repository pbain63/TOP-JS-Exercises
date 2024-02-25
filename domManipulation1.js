const container = document.querySelector("#container");

const redText = document.createElement("p");
const blueText = document.createElement("h3");
const anotherDiv = document.createElement("div");
const anotherHeading = document.createElement("h1");
const anotherText = document.createElement("p");

redText.textContent = "Hey I’m red!";
blueText.textContent = "I’m a blue h3!";
anotherHeading.textContent = "I’m in a div";
anotherText.textContent = "ME TOO!";

redText.style.color = "red";
blueText.style.color = "blue";
anotherDiv.setAttribute("style", "background-color: pink; border: 3px solid black")
//anotherDiv.style.cssText = "background-color: pink; border: 3px solid black"
// anotherDiv.style.backgroundColor = "pink";
// anotherDiv.style.border = "3px solid black";

container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(anotherDiv);
anotherDiv.appendChild(anotherHeading);
anotherDiv.appendChild(anotherText);
