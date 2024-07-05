const calc = {
  num: 0,
  increment() {
    console.log(this === calc);
    this.num += 1;
    return this.num;
  },
};


console.log(calc.increment());
console.log(calc.increment());


// console.log(player1.name);
