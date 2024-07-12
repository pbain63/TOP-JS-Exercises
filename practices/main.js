const checkbox = document.getElementById("id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this! <br/>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}
// console.log();
