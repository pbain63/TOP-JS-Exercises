myObj = {
  myString: "Hello World!",
  myFunc: function () {
    return this.myString;
  },
};
console.log(myObj.myFunc());