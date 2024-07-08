const reg1 = new RegExp("\\w+");
const reg2 = RegExp("\\w+");

console.log(reg1 instanceof RegExp);
console.log(reg2 instanceof RegExp);
console.log(reg1.source === reg2.source);
// console.log(player1.name);