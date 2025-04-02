// let obj = {
//     get propName() {

//     },
//     set propName(value) {

//     }
// };

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
user.fullName = "Pro Dip";
alert(user.name);
alert(user.surname);
