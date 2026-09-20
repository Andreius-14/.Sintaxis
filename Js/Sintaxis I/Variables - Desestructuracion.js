// ┌───────────────────────────────────┐
// │        Desestructuracion          │
// └───────────────────────────────────┘

// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │
// │                  ARRAY                     │

// ┌────────────────────────
// │  => ARRAY - I
// └────────────────────────

const numeros = [1, 2, 3];
const [a, b, c] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// ┌────────────────────────
// │  => ARRAY - II
// └────────────────────────

let [hi, ...all] = ["Hola", "yo", "soy", "Sarah"];

console.log(hi); // "Hola"
console.log(all); // ["yo", "soy", "Sarah"]

// ┌────────────────────────
// │  => ARRAY - III
// └────────────────────────
// [Tiene Sentido, La funcion tien un respuesta Array]
let fun = () => [1, 3, 2];
let [one, , two] = fun();

// ┌────────────────────────
// │  => ASIGNA U OMITE
// └────────────────────────

let [valor1, , valor3] = ["Hola", "yo", "soy", "Sarah"];

console.log(valor1); // "Hola"
console.log(valor3); // "Sarah"

let [, valor2, , valor4] = ["Hola", "yo", "soy", "Sarah"];

console.log(valor2); // "yo"
console.log(valor4); // "Sarah"

// ┌────────────────────────
// │  => VALOR PREDETERMINADO
// └────────────────────────

const persona = ["Carlos Arturo", 23, "Mexico"];

const [nombre, , pais, profesion = "No especificado"] = persona;

console.log(pais); // Resultado: Mexico

// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │
// │                  OBJETO                     │

// ┌────────────────────────
// │  => OBJETO - I
// └────────────────────────

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

// ┌────────────────────────
// │  => VALOR PREDETERMINADO
// └────────────────────────
// Si no encuentra Campo lo Creara (No Sobreescribe)

let person = {
  nombre2: "Sarah",
  pais: "Nigeria",
  trabajo: "Desarrollador",
};

let { nombre2 = "miNombre", amiga = "Annie" } = person;

console.log(nombre2); // "Sarah"
console.log(amiga); // "Annie"

// ┌────────────────────────
// │  => RENOMBRA
// └────────────────────────

let persona2 = {
  nombre: "Sarah",
  pais: "Nigeria",
  amigas: ["Annie", "Becky"],
};

let { nombre: foo, amigas: bar } = persona2;

console.log(foo); // "Sarah"
console.log(bar); // ["Annie", "Becky"]

// ┌────────────────────────
// │  => REDUNDANTE - DECLARA VARIABLES
// └────────────────────────

let nombre3, pais3, trabajo3;

let persona3 = {
  nombre3: "Sarah",
  pais: "Nigeria",
  trabajo: "Desarrollador",
};

({ nombre3, pais3, trabajo3 } = persona3);

console.log(nombre); // "Sarah"
console.log(trabajo); // "Desarrollador"
