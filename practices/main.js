// let obj = {
//     get propName() {

//     },
//     set propName(value) {

//     }
// };

function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  alert(this.name);
};
let user = new User("John");
user.sayHi();
