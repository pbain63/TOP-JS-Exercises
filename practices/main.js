function Greeter(name) {
  this.name = name || "Prodip Bain";
}
Greeter.prototype.hello = function hello() {
  return "Hello my name is " + this.name;
};

const george = new Greeter("George");
const msg = george.hello();
console.log(msg);
