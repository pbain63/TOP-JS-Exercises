function Vehicle(type, wheelsCount) {
  if (!(this instanceof Vehicle)) {
    throw Error("Error: Incorrect invocation, Prodip");
  }
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}

// Function invocation
const car = new Vehicle("Car", 4);
console.log(car.type); // => 'Car'
console.log(car.wheelsCount); // => 4
console.log(car === window); // => true
console.log(car instanceof Vehicle);

const brokenCar = Vehicle("Broken Car", 3);

// console.log(player1.name);