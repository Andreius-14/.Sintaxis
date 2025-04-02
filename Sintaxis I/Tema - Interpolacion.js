// ┌───────────────────────────────────┐
// │          INTERPOLACION            │
// └───────────────────────────────────┘

const nombre = "Juan";
const edad = 25;

console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// ┌───────────────────────────────────┐
// │          INTERPOLACION            │
// └───────────────────────────────────┘

const a = 5;
const b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}.`);

// ┌───────────────────────────────────┐
// │    INTERPOLACION - MULTILINEA     │
// └───────────────────────────────────┘

const saludo = `
  Hola ${nombre},
  ¿Cómo estás hoy?
  Tu edad es ${edad}.
`;

console.log(saludo);
/* Salida:
  Hola Juan,
  ¿Cómo estás hoy?
  Tu edad es 25.
*/
