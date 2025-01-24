const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};
function userId({ id }) {
  return id;
}
console.log(userId(user));

function userDisplayName({ displayName: dname }) {
  return dname;
}
console.log(userDisplayName(user));

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}
console.log(whois(user));
