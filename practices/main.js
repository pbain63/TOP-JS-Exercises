function f() {
  return [1, 2, 3];
}
const [a, , b] = f();
const [c] = f();
console.log(c);
