const obj = {
  self: "123",
  __proto__: {
    prot: "456",
  },
};
const { self, prot } = obj;

console.log(self); // "123"
console.log(prot); // "456"
