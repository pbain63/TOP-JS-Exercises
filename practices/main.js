function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function (name) {
    return `${myGreet} ${name}`;
  };
}
const sayHello = createGreeting("hello");
const sayHey = createGreeting("hey");
console.log(sayHello("prodip"));
console.log(sayHello("hedayet"));
console.log(sayHey("Bill"));
