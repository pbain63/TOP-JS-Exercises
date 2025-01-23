const User = function (name) {
  this.name = name;
  this.discordName = "@"
}
function createUser(name) {
  const discordName = "@" + name;
  return {name, discordName};
}



