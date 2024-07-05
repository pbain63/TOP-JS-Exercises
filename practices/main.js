const words = ["Hello", "World"];
words.join(",");

const obj = {
  myMethod() {
    return new Date().toString();
  },
};
console.log(obj.myMethod());

const func = obj.myMethod;
console.log(func());
console.log(parseFloat("16, 6"));
console.log(isNaN(0));

// console.log(player1.name);
