function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((map) => num * 3)
    .reduce((accumulator, currentItem) => accumulator + currentItem);
}
// console.log(sumOfTripledEvens(1, 2, 3, 4, 5, 6, 7, 8));
