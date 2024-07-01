let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  },
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};
let longEar = {
  earLength: 10,
  __proto__: rabbit,
};
longEar.walk();
console.log(longEar.eats);
console.log(rabbit.jumps);
// console.log(player1.name);
