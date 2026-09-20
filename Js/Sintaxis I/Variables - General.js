/*
┌──────────────────────────────┐
│      Tipos de Variables      │
└──────────────────────────────┘
+----------------+---------------------+-----------------------+---------------------+
| Característica | let                 | const                 | Ejemplo             |
+----------------+---------------------+-----------------------+---------------------+
| Sobreescribir  | Sí                  | No                    | let x = 10; x = 20; |
|                |                     |                       | const y = 10; y = 20; // Error |
+----------------+---------------------+-----------------------+---------------------+
| Inicializar    | Sí                  | Sí (pero con cuidado) | let z;              |
| Vacío          |                     |                       | const w; // Error   |
+----------------+---------------------+-----------------------+---------------------+
| Ámbito         | Bloque              | Bloque                | { let a = 1; }      |
|                |                     |                       | { const b = 2; }    |
+----------------+---------------------+-----------------------+---------------------+
| Re-declarar    | No                  | No                    | let c = 3; let c = 4; // Error|
|                |                     |                       | const d = 5; const d = 6; // Error|
+----------------+---------------------+-----------------------+---------------------+*/

// ┌───────────────────────────────────┐
// │      2. let                       │
// └───────────────────────────────────┘

let edad = 25;
edad = 30; // Ok, reasignable
// let edad = 40;  // Error: No se puede redeclarar en el mismo scope

// ┌───────────────────────────────────┐
// │      3. const                     │
// └───────────────────────────────────┘
// Scope de bloque, no reasignable, debe inicializarse
const pi = 3.14;
// pi = 3.1416;  // Error: No se puede reasignar
// const sinValor;  // Error: Debe tener valor al declararse

// Nota: Objetos/arrays con const SÍ pueden modificarse internamente
const obj = { clave: "valor" };
obj.clave = "nuevo"; // Ok, no reasigna la referencia
console.log(obj.clave); // "nuevo"

// ┌───────────────────────────────────┐
// │      4. Sin declaración (global)  │
// └───────────────────────────────────┘
// Variable implícita (no recomendada, modo estricto lo impide)
sinDeclarar = "Soy global"; // Se adjunta al objeto global (window en navegadores)
console.log(sinDeclarar); // "Soy global"

/*
┌──────────────────────────────┐
│      Tipos de Datos         │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. String                    │
// └───────────────────────────────────┘
const texto = "Hola"; // String simple

// ┌───────────────────────────────────┐
// │      2. Number                    │
// └───────────────────────────────────┘
const entero = 42;
const decimal = 3.14;
const infinito = Infinity; // Resultado de 1/0
const noNumero = NaN; // Not a Number (ej: "texto" * 2)

// ┌───────────────────────────────────┐
// │      3. Boolean                   │
// └───────────────────────────────────┘
const esVerdad = true;
const esFalso = false;
const comparacion = 5 > 3; // true

// ┌───────────────────────────────────┐
// │      4. Undefined                 │
// └───────────────────────────────────┘
// Variable declarada pero sin valor
let sinDefinir;
console.log(sinDefinir); // undefined
console.log(typeof sinDefinir); // "undefined"

// ┌───────────────────────────────────┐
// │      5. Null                      │
// └───────────────────────────────────┘
// Ausencia intencional de valor
const vacio = null;
console.log(vacio); // null
console.log(typeof vacio); // "object" (error histórico en JS)

// ┌───────────────────────────────────┐
// │      6. BigInt                    │
// └───────────────────────────────────┘
// Números enteros muy grandes (con "n" al final)
const numeroGrande = 12345678901234567890n;
console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(typeof numeroGrande); // "bigint"

// ┌───────────────────────────────────┐
// │      7. Symbol                    │
// └───────────────────────────────────┘
// Valor único e inmutable (para identificadores)
const simbolo = Symbol("id");
const otroSimbolo = Symbol("id");
console.log(simbolo === otroSimbolo); // false (siempre únicos)
console.log(typeof simbolo); // "symbol"

// ┌───────────────────────────────────┐
// │      8. Object (No primitivo)     │
// └───────────────────────────────────┘
// Colección de propiedades (incluye arrays, funciones)
const objeto = { nombre: "Ana", edad: 25 };
const array = [1, 2, 3];
const funcion = function () {
  return "Hola";
};

console.log(typeof objeto); // "object"
console.log(typeof array); // "object"
console.log(typeof funcion); // "function" (subtipo de object)
