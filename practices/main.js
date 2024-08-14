function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("Prodip", "X");
const player2 = new Player("Also Prodip", "O");

player1.sayName();
