class Pet {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  ligInfo = () => {
    console.log(this === myCat);
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet("Cat", 4);


setTimeout(myCat.ligInfo, 1000);

// console.log(player1.name);
