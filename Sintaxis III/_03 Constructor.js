class Rectangulo {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// ┌───────────────────────────────────┐
// │      Variables de Instancia       │
// └───────────────────────────────────┘
// AVANZADO
class Punto {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get distanciaAlOrigen() {
    return Math.sqrt(this._x ** 2 + this._y ** 2);
  }

  set coordenadas({ x, y }) {
    this._x = x;
    this._y = y;
  }

  get coordenadas() {
    return { x: this._x, y: this._y };
  }
}

const punto = new Punto(3, 4);
console.log(punto.distanciaAlOrigen); // Obtener la distancia al origen
console.log(punto.coordenadas); // Obtener las coordenadas

punto.coordenadas = { x: 5, y: 7 }; // Establecer nuevas coordenadas
console.log(punto.coordenadas); // Obtener las nuevas coordenadas
console.log(punto.distanciaAlOrigen); // Obtener la nueva distancia al origen
// ┌───────────────────────────────────┐
// │      Variables de Instancia       │
// └───────────────────────────────────┘

// FACIL
class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}

const persona = new Persona("Juan");
console.log(persona.nombre); // Obtener el nombre
persona.nombre = "Carlos"; // Establecer un nuevo nombre
console.log(persona.nombre); // Obtener el nuevo nombre
