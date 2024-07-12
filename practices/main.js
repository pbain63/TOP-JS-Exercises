const dialog = document.getElementById("dialog");
const showBtn = document.querySelector(".show");

const closeBtn = dialog.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

// console.log();
