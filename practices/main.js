function Runner(name) {
  console.log(this instanceof Rabbit);
  this.name = name;
}

function Rabbit(name, countLegs) {
  console.log(this instanceof Rabbit);

  Runner.call(this, name);
  this.countLegs = countLegs;
}

const myRabbit = new Rabbit("White Rabbit", 4);
console.log(myRabbit);
// console.log(player1.name);
