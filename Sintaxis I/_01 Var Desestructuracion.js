// │         DESESTRUCTURACION         │
// │         DESESTRUCTURACION         │
// │         DESESTRUCTURACION         │
// │         DESESTRUCTURACION         │
// │         DESESTRUCTURACION         │
// │         DESESTRUCTURACION         │

// ┌───────────────────────────────────┐
// │               ARRAY               │
// └───────────────────────────────────┘

const numeros = [1, 2, 3];
const [a, b, c] = numeros;

console.log(a); // Muestra 1
console.log(b); // Muestra 2
console.log(c); // Muestra 3

let [saludo, ...introduccion] = ["Hola", "yo", "soy", "Sarah"];

console.log(saludo); // "Hola"
console.log(introduccion); // ["yo", "soy", "Sarah"]

// Tiene Sentido - La funcion tien un respuesta Array
//let fun = () => {
//  return [1, 3, 2];
//};
//
//let [one, , two] = fun();

// ──────────────────────────────────────────────────────────────
// => ASIGNA U OMITE
// ──────────────────────────────────────────────────────────────

let [valor1, , valor3] = ["Hola", "yo", "soy", "Sarah"];

console.log(valor1); // "Hola"
console.log(valor3); // "Sarah"

let [, valor2, , valor4] = ["Hola", "yo", "soy", "Sarah"];

console.log(valor2); // "yo"
console.log(valor4); // "Sarah"

// ──────────────────────────────────────────────────────────────
// => VALOR PREDETERMINADO
// ──────────────────────────────────────────────────────────────
const persona = ["Carlos Arturo", 23, "Mexico"];

const [nombre, , pais, profesion = "No especificado"] = persona;

console.log(pais); // Resultado: Mexico
// ┌───────────────────────────────────┐
// │              OBJETO               │
// └───────────────────────────────────┘
let personaje1 = {
  nombre1: "Sarah",
  pais: "Nigeria",
  trabajo: "Desarrollador",
  amigas: ["Annie", "Becky"],
};

let { nombre1, amigas, ...otras } = personaje1;

console.log(nombre1); // "Sarah"
console.log(amigas); // ["Annie", "Becky"]
console.log(otras); // {pais: "Nigeria", trabajo: "Desarrollador"}

// ───────────────────────────────
// => VALOR PREDETERMINADO
// ───────────────────────────────

let person = {
  nombre2: "Sarah",
  pais: "Nigeria",
  trabajo: "Desarrollador",
};
// Si no encuentra Campo lo Creara (No Sobreescribe)

let { nombre2 = "miNombre", amiga = "Annie" } = person;
console.log(nombre2); // "Sarah"
console.log(amiga); // "Annie"
// ───────────────────────────────
// => RENOMBRAR
// ───────────────────────────────

let persona2 = {
  nombre: "Sarah",
  pais: "Nigeria",
  amigas: ["Annie", "Becky"],
};

let { nombre: foo, amigas: bar } = persona2;

console.log(foo); // "Sarah"
console.log(bar); // ["Annie", "Becky"]

// ───────────────────────────────
// => Declara Variables
// ───────────────────────────────
let persona3 = {
  nombre3: "Sarah",
  pais: "Nigeria",
  trabajo: "Desarrollador",
};

let nombre3, pais3, trabajo;
({ nombre, pais3, trabajo } = persona3);

console.log(nombre); // "Sarah"
console.log(trabajo); // "Desarrollador"
