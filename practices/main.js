function nonStrictSum(a, b) {
  console.log(this === window);
  return a + b;
}

function strictSum(a, b) {
  "use strict";
  console.log(this === undefined);
  return a + b;
}

console.log(nonStrictSum(5, 6));

console.log(strictSum(8, 12));
// console.log(player1.name);
