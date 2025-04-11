class User {
  promptName = prompt("Name, please?", "Prodip");
  name = `Welcome, ${this.promptName}!`;
}

let user = new User();
alert(user.name);

