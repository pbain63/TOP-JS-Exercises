let globalAge = 23;
function printAge(age) {
  var varAge = 34;

  if (age > 0) {
    const constAge = age * 2;
    console.log(constAge);
  }
  console.log(constAge);
}
printAge(globalAge);

console.log(varAge);
