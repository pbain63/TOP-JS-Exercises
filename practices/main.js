const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    console.log(this === numbers);

    const calculate = () => {
      console.log(this === numbers);
      return this.numberA + this.numberB;
    };
    return calculate();
  },
};
console.log(numbers.sum());

// console.log(player1.name);
