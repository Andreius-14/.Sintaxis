// Notación de corchetes
let miArray = [1, 2, 3, 4, 5];

// Constructor Array() [1, 2, 3, 4, 5]
let miArray = new Array(1, 2, 3, 4, 5);

// Constructor Array()
let miArray = new Array(5);
// [undefined, undefined, undefined, undefined, undefined]

// Método Array.from()
let miArray = Array.from("Hola");

// Método Array.of()
let miArray = Array.of(1, 2, 3, 4, 5);

// ┌───────────────────────────────────┐
// │      1. Array Literal             │
// └───────────────────────────────────┘

const frutas = ["manzana", "pera", "uva"];
frutas[1] = "kiwi"; // Modificación
console.log(frutas[0]); // "manzana" (acceso por índice)

// ┌───────────────────────────────────┐
// │      2. Array Constructor         │
// └───────────────────────────────────┘

const numeros = new Array(1, 2, 3); // Usando new Array()
const vacio = new Array(3); // Nota: new Array(3) crea array vacío con longitud 3

console.log(vacio); // [ <3 empty items> ]
console.log(numeros); // [1, 2, 3]

// ┌───────────────────────────────────┐
// │      4. Iteración                 │
// └───────────────────────────────────┘
const colores = ["rojo", "azul"];

for (const color of colores) {
  console.log(color); // "rojo", "azul"
}

colores.forEach((color, i) => {
  console.log(`${i}: ${color}`); // "0: rojo", "1: azul"
});

// ┌───────────────────────────────────┐
// │      8. Spread y Destructuring    │
// └───────────────────────────────────┘
const original = [1, 2];
const copia = [...original]; // Copia: [1, 2]
const [primero, segundo] = original; // Destructuring: 1, 2
console.log(copia, primero);
