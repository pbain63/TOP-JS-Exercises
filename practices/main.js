const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/puppy.jpeg") {
    myImage.setAttribute("src", "images/Vincent_van_Gogh.jpg");
  } else {
    myImage.setAttribute("src", "images/puppy.jpeg");
  }
};
