// ┌────────────────────────
// │  => VERSION 01
// └────────────────────────
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Ana")); // "Hola, Ana"

// ┌────────────────────────
// │  => VERSION 02
// └────────────────────────
const despedir = function (nombre) {
  return `Adiós, ${nombre}`;
};
console.log(despedir("Juan")); // "Adiós, Juan"

// 3. Arrow Function
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // 5

// ┌────────────────────────
// │  => PARAMETROS
// └────────────────────────

// ┌────
// │  => PREDETERMINADOS
// └────

function myFunction(x, y = 10) {
  return x + y;
}

myFunction(5); // 15

function test(a, b = 3, c = 42) {
  return a + b + c;
}

test(5); // 50

// ┌────
// │  => DESORDENADOS
// └────

function saludar(nombre = "Invitado", apellido = "", edad = "Desconocida") {
  console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
}

// Pasando Paremtros Especiales
const datos = ["Juan", "Pérez", 30];
saludar(...datos); // array
saludar({ edad: 30, nombre: "Juan" }); // Objeto
// ┌────
// │  => SuperDesordenado
// └────
function salu(nombre, opciones) {
  const apellido = opciones?.apellido || "";
  const edad = opciones?.edad || "Desconocida";

  console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
}

salu("Juan", { edad: 30, apellido: "Pérez" }); // Orden desordenado

// => SPREAD
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// ┌────
// │  => FUNCION COMO PARAMETROS
// └────
function calcular(a, b, operacion) {
  return operacion(a, b);
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

calcular(5, 3, sumar); // resultado = 8
calcular(5, 3, restar); // resultado = 2
calcular(5, 3, multiplicar); // resultado = 15
calcular(5, 3, dividir);

// ┌────────────────────────
// │  => E - AUTOINVOCADA
// └────────────────────────

// 4. IIFE
(function () {
  console.log("Ejecutada");
})(); // "Ejecutada"

(function (a, b, c) {
  console.log(a + b + c);
})(10, 4, 5);

// ┌────────────────────────
// │  => E - CONSTRUCTOR
// └────────────────────────

function Persona(nombre) {
  this.nombre = nombre;
}
const persona1 = new Persona("María");
console.log(persona1.nombre); // "María"

// 6. Method
const coche = {
  marca: "Toyota",
  arrancar() {
    return `${this.marca} en marcha`;
  },
};
console.log(coche.arrancar()); // "Toyota en marcha"

// 7. Generator Function
//function* gener
