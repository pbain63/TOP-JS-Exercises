// object literal
let myModule = {
  name: "prodip",
  age: 34,
  sayName: function () {
    // alert(this.name);
    console.log(this.name);
  },
  setName: function (newName) {
    this.name = newName;
  },
};
myModule.sayName();
myModule.setName("Bro");
