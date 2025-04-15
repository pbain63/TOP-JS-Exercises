function Animal() {}

Animal.prototype.speak = function () {
  return this;
};
Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak();
console.log(speak());

const eat = Animal.eat;
eat();
console.log(eat());
