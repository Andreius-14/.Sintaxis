/*
┌──────────────────────────────┐
│         Objetos en JS        │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. Objeto Literal            │
// └───────────────────────────────────┘
// Forma básica de crear un objeto con propiedades
const persona = {
  nombre: "Ana", // Clave: valor
  edad: 25,
  saludar: function () {
    // Método (función como propiedad)
    return `Hola, soy ${this.nombre}`;
  },
};
console.log(persona.nombre); // "Ana"
console.log(persona.saludar()); // "Hola, soy Ana"

// ┌───────────────────────────────────┐
// │      2. Acceso y Modificación     │
// └───────────────────────────────────┘
// Dos formas de acceder o modificar propiedades
persona.edad = 26; // Notación de punto
persona.nombre = "María"; // Notación de corchetes
const clave = "edad";
console.log(persona[clave]); // 26 (corchetes con variable)

// ┌───────────────────────────────────┐
// │      3. Object Constructor        │
// └───────────────────────────────────┘
// Usando new Object() (menos común)
const coche = new Object();
coche.marca = "Toyota";
coche.modelo = "Corolla";
console.log(coche.marca); // "Toyota"

// ┌───────────────────────────────────┐
// │      4. Clases (ES6)              │
// └───────────────────────────────────┘
// Objetos con plantillas usando class
class Perro {
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
  }

  ladrar() {
    return `${this.nombre} dice: ¡Guau!`;
  }
}
const miPerro = new Perro("Max", "Labrador");
console.log(miPerro.ladrar()); // "Max dice: ¡Guau!"

// ┌───────────────────────────────────┐
// │      5. Propiedades y Métodos     │
// └───────────────────────────────────┘
// Métodos útiles de Object
const usuario = { id: 1, rol: "user" };
console.log(Object.keys(usuario)); // ["id", "rol"] (claves)
console.log(Object.values(usuario)); // [1, "user"] (valores)
console.log(Object.entries(usuario)); // [["id", 1], ["rol", "user"]] (pares)

// ┌───────────────────────────────────┐
// │      6. Similares: Array          │
// └───────────────────────────────────┘
// Array es un tipo de objeto ordenado
const frutas = ["manzana", "pera"];
frutas.push("uva"); // Método de array
console.log(frutas[0]); // "manzana"
console.log(typeof frutas); // "object"

// ┌───────────────────────────────────┐
// │      7. Similares: Map            │
// └───────────────────────────────────┘
// Map: Similar a objeto, pero claves pueden ser cualquier tipo
const mapa = new Map();
mapa.set("clave", "valor");
mapa.set(1, "numero");
console.log(mapa.get("clave")); // "valor"
console.log(mapa.size); // 2 (número de pares)

// ┌───────────────────────────────────┐
// │         Comparación               │
// └───────────────────────────────────┘
const obj = { a: 1 };
const copia = Object.assign({}, obj); // Copia superficial
copia.a = 2;
console.log(obj.a, copia.a); // 1, 2 (no afectan el original)
