// ┌───────────────────────────────────┐
// │          Encapsulamiento
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
