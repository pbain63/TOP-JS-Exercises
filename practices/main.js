// let obj = {
//     get propName() {

//     },
//     set propName(value) {

//     }
// };

function makeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}
let User = makeClass("Prodip");
new User().sayHi();
