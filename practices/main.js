class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
  get area() {
    return this.height * this.width;
  }
}
