//freecodecamp.org/news/how-to-reverse-a-string-in-
//javascript-in-3-different-ways-
//--Using decrementing for loop
const reverseString = function (word) {
    if (word === "") return "";
    let newString = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newString += word[i];
    }
    return newString;
  };
  //--
  //--
  //Using built-in functions
  // const reverseString = function (word) {
  //   if (word === "") {
  //     return "";
  //   } else {
  //     return word.split("").reverse().join("");
  //   }
  // };
  //--
  //--
  //TOP solution:
  // const reverseString = function (string) {
  //   return string.split("").reverse().join("");
  // };
  
  //--
  // Do not edit below this line
  module.exports = reverseString;
  