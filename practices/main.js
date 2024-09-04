// eventlisteners på pile...
const prev_arrow = document.querySelector("#prev");
prev_arrow.addEventListener("click", shift_cards);
const next_arrow = document.querySelector("#next");
next_arrow.addEventListener("click", shift_cards);

// array med img-elementer i galleriet...
const recipe_imgs = document.querySelectorAll("#recipes a img");

// array med h4-elementer i galleriet...
const recipe_headings = document.querySelectorAll(".recipe_txt h4");

// array med links til billeder...
const photo_array = [
  "https://assets.codepen.io/2878366/instagram1.jpg",
  "https://assets.codepen.io/2878366/instagram2.jpg",
  "https://assets.codepen.io/2878366/instagram3.jpg",
  "https://assets.codepen.io/2878366/instagram4.jpg",
  "https://assets.codepen.io/2878366/instagram5.jpg",
  "https://assets.codepen.io/2878366/instagram6.jpg",
];

// array med alt-tekster til billeder...
const alt_txts = [
  "Foto af Ormemuffins",
  "Foto af Ormegremolata",
  "Foto af Ormeboller",
  "Foto af Billehummus",
  "Foto af Snegleknas",
  "Foto af LArver med bulgur",
];

// array med tekster til fotos...
const recipe_h4_array = [
  "Orme-Muffins",
  "Orme-Gremolata",
  "Orme-Boller",
  "Bille-Hummus",
  "Snegleknas",
  "Larver med bulgur",
];

// variabler til hvert img-element i galleriet
let index1 = 0;
let index2 = 1;
let index3 = 2;

function shift_cards() {
  if (this === next_arrow) {
    // der er klikket på højre-pilen

    if (index1 < photo_array.length - 1) {
      index1++;
    } else {
      index1 = 0;
    }

    if (index2 < photo_array.length - 1) {
      index2++;
    } else {
      index2 = 0;
    }

    if (index3 < photo_array.length - 1) {
      index3++;
    } else {
      index3 = 0;
    }
  } else {
    // der er klikket på venstre-pilen

    if (index1 > 0) {
      index1--;
    } else {
      index1 = photo_array.length - 1;
    }

    if (index2 > 0) {
      index2--;
    } else {
      index2 = photo_array.length - 1;
    }

    if (index3 > 0) {
      index3--;
    } else {
      index3 = photo_array.length - 1;
    }
  }

  // skift fotos...
  recipe_imgs[0].setAttribute("src", photo_array[index1]);
  recipe_imgs[1].setAttribute("src", photo_array[index2]);
  recipe_imgs[2].setAttribute("src", photo_array[index3]);

  // skift alt-teksten
  recipe_imgs[0].setAttribute("alt", alt_txts[index1]);
  recipe_imgs[1].setAttribute("alt", alt_txts[index2]);
  recipe_imgs[2].setAttribute("alt", alt_txts[index3]);

  //skift overskrifter...
  recipe_headings[0].textContent = recipe_h4_array[index1];
  recipe_headings[1].textContent = recipe_h4_array[index2];
  recipe_headings[2].textContent = recipe_h4_array[index3];
}