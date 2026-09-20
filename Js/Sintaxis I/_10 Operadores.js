// ═════════════════════════════════════
//                Operadores
// ═════════════════════════════════════

// ┌───────────────────────────────────┐
// │         Aritméticos               │
// └───────────────────────────────────┘
const a = 10;
const b = 3;
const suma = a + b; // 13 (suma)
const resta = a - b; // 7 (resta)
const multi = a * b; // 30 (multiplicación)
const div = a / b; // 3.33... (división)
const modulo = a % b; // 1 (resto)
const potencia = a ** b; // 1000 (10^3)

// ┌───────────────────────────────────┐
// │         Asignación                │
// └───────────────────────────────────┘
let x = 5; // Asigna 5
x += 2; // x ahora es 7
x -= 1; // x ahora es 6
x *= 3; // x ahora es 18
x /= 2; // x ahora es 9

// ┌───────────────────────────────────┐
// │         Comparación               │
// └───────────────────────────────────┘
const esIgual = a == b; // false (igualdad sin tipo)
const esExacto = a === b; // false (igualdad con tipo)
const noIgual = a != b; // true (diferente)
const mayor = a > b; // true (mayor que)
const menorIgual = a <= b; // false (menor o igual)

// ┌───────────────────────────────────┐
// │          Lógicos                  │
// └───────────────────────────────────┘
const and = a > 0 && b < 5; // true (y lógico)
const or = a < 0 || b > 0; // true (o lógico)
const not = !(a === 10); // false (negación)

// ┌───────────────────────────────────┐
// │          Ternario                 │
// └───────────────────────────────────┘
const resultado = a > b ? "mayor" : "menor"; // "mayor" (if corto)

// ┌───────────────────────────────────┐
// │          ++ --                 │
// └───────────────────────────────────┘

//let number1 = 8;
//number1++; // number1 ahora es 9 (incremento posterior)
//++number1; // number1 ahora es 11 (incremento previo)

// ┌───────────────────────────────────┐
// │        Operadores de tipo         │
// └───────────────────────────────────┘
const esNumero = typeof a === "number"; // true (verifica tipo)
const existe = "prop" in objeto; // true si "prop" existe en objeto

console.log(suma, x, mayor, and, resultado);
