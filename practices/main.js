function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.ligInfo = function () {
    console.log(this === myCat);
    console.log(`The ${this.type} has ${this.legs} legs`);
  };
}
const myCat = new Pet("Cat", 4);
const boundLogInfo = myCat.ligInfo.bind(myCat);

setTimeout(boundLogInfo, 1000);

// console.log(player1.name);
