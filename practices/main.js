// const array = [1, 2, 3, 4, 5];
// const [zerothEle, firstEle] = array;

// console.log(array[firstEle]);
// console.log(firstEle);

const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
console.log(numbers[1]);
