let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (const prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    console.log(`Our: ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}
// console.log(player1.name);
