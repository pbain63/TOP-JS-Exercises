class ParentClass {
  constructor() {
    return 1;
  }
}
console.log(new ParentClass());

class ChildClass extends ParentClass {
  constructor() {
    super();
    return 1;
  }
}

console.log(new ChildClass());
