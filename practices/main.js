const foo = { bar: "Here be dragons" };
console.log(Object.hasOwn(foo, "bar"));
console.log(Object.prototype.hasOwnProperty.call(foo, "bar"));
console.log(({}).hasOwnProperty.call(foo, "bar"));

// console.log(player1.name);
