function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}
Student.prototype.sayName = function () {
  console.log(this.name);
};


function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}
EighthGrader.prototype = Object.create(Student.prototype);

function NinthGrader(name) {
  this.name = name;
  this.grade = 9;
}

// Student.prototype.goToProm = function () {
//   console.log("Eh.. go to prom?");
// };
NinthGrader.prototype = Object.create(Student.prototype);

NinthGrader.prototype.sayName = function () {
  console.log("HAHAHHAHAHAHAHA");
};


const studentOne = new NinthGrader("steve");
const studentTwo = new EighthGrader("jenn");

studentOne.sayName();
studentTwo.sayName();

// console.dir(Object);
// console.log(player1.name);
