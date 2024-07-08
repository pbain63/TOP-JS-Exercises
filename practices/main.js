function Period(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}

Period.prototype.format = function () {
  console.log(this === walkPeriod);
  return this.hours + " hours and" + this.minutes + " minutes";
};
const walkPeriod = new Period(5, 47);
console.log(walkPeriod.format());
// console.log(player1.name);
