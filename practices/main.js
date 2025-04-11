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
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("Prodip");
alert(user.name);

user = new User("");
