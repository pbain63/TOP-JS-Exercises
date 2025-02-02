let score = (function () {
  let points = 0;
  return function () {
    return (points += 1);
  };
})();

console.log(score());
console.log(score());
console.log(score());
console.log(score());