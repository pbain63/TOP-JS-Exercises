function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}

console.log(Object.getPrototypeOf(new ParentClass()));
