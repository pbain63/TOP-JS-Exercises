const myDog = Object.create({
  sayName() {
    console.log(this === myDog);
    return this.name;
  },
});

myDog.name = "Milo";
console.log(myDog.sayName());

// console.log(player1.name);
