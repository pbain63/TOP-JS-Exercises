const rabbit = { name: "White Rabbit" };

function concatName(string) {
  console.log(this === rabbit);
  return string + this.name;
}

console.log(concatName.call(rabbit, "Hello "));
console.log(concatName.apply(rabbit, ["Bye "]));
// console.log(player1.name);
