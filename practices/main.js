function Hero(name, level) {
  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function () {
  return `${this.name} says hello!`;
};

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}
Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

const hero1 = new Warrior("Prodip", 1, "axe");
const hero2 = new Healer("Bain", 1, "cure");

console.log(hero1.attack());
console.log(hero1.greet());

// console.log(Object.getPrototypeOf(hero1));

// console.log(player1.name);
