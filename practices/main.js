class NullClass extends null {
  constructor() {
    return Object.create(new.target.prototype);
  }
}
const proto = Object.getPrototypeOf;
console.log(proto(proto(new NullClass())));
