const myTextBox = document.getElementById("my-textbox");
myTextBox.addEventListener("keydown", checkName, false);

function checkName(evt) {
  const key = evt.key;
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  if (!lowerCaseAlphabet.includes(key)) {
    evt.preventDefault();
    displayWarning(
      "Please use lowercase letters only.\n" + `key pressed: ${key}\n`
    );
  }
  // console.log(key);
}

let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    myTextBox.parentNode.insertBefore(warningBox, myTextBox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
// console.log();
