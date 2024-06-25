document.querySelector("html").addEventListener("click", function (event) {
  alert("Ouch! Stop poking me!");
  event.target.style.backgroundColor = "red";
});
