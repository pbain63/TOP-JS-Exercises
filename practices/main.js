class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  log() {
    console.log(this === myPoint);
    setTimeout(() => {
      console.log(this === myPoint);
      console.log(this.x + ":" + this.y);
    }, 1000);
  }
}
const myPoint = new Point(95, 165);
myPoint.log();

// console.log(player1.name);
