// ┌───────────────────────────────────┐
// │          Encapsulamiento
// └───────────────────────────────────┘

class Rectangle {
  constructor(height = 0, width = 0) {
    this._height = height;
    this._width = width;
  }

  set height(value) {
    this._height = value;
  }

  set width(value = 0) {
    this._width = value;
  }

  get area() {
    return this._height * this._width;
  }
}

let obj = new Rectangle();
obj.height = 10;
obj.width = 20;
obj.area;
