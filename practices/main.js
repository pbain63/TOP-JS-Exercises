const user = {
  firstName: "Prodip",
  lastname: "Bain",
  hobbies: ["programming", "piano"],
  listHobbies: function () {

    this.hobbies.forEach(function (hobby) {
      // console.log(user.firstName);
      console.log(this.firstName);
      console.log(hobby);
    }, this);
  },
};
user.listHobbies();



// console.dir(Object);
// console.log(player1.name);
