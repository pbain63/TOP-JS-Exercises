function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}
const player1 = new Player("prodip", "X");
const player2 = new Player("Rock", "O");
player1.sayName();
player2.sayName();
console.log(player1.marker);
console.log(player1.name);
// console.log(sumOfTripledEvens(1, 2, 3, 4, 5, 6, 7, 8));
