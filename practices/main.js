class ParentClass {}
class ChildClass extends ParentClass {}

console.log(Object.getPrototypeOf(ChildClass) === ParentClass);
console.log(
  Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype
);
