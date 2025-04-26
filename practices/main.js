class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}
console.log(C.getX(new C()));
console.log(C.getX({}));
