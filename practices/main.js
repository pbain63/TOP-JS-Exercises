function Car() {
  this.speed = 120;
}
Car.prototype.getSpeed = () => {
  // Car.prototype.getSpeed = function(){
  return this.speed;
};
let car = new Car();
console.log(car.getSpeed());

// console.log(player1.name);
