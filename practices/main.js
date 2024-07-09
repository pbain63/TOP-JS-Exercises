const user = {
  firstName: "Prodip",
  lastname: "Bain",
  hobbies: ["programming", "piano"],
  listHobbies: function () {
    
    this.hobbies.forEach(function (hobby) {
      console.log(hobby);
    });
  },
};
user.listHobbies();

// console.dir(Object);
// console.log(player1.name);
