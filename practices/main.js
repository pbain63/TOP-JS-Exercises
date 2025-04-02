// let obj = {
//     get propName() {

//     },
//     set propName(value) {

//     }
// };

let user = {
  name: "John",
  surname: "Smith",
};
Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

alert(user.fullName);

for (let key in user) alert(key);
