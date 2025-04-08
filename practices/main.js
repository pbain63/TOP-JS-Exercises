// let obj = {
//     get propName() {

//     },
//     set propName(value) {

//     }
// };

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

alert(typeof User);

// let user = new User("Prodip");
// user.sayHi();
