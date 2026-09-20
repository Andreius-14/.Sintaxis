// ═════════════════════════════════════
//                Scope
// ═════════════════════════════════════

// Scope define dónde una variable está disponible

// Alcance de const - let - var
// => var --> No respeta, Obsoleto Actualmente
// => let --> respeta
// => const --> respeta

// ┌───────────────────────────────────┐
// │      1. Scope Global              │
// └───────────────────────────────────┘
const globalVar = "Global"; // Global : Puede Llamarse desde mismo nivel o inferiores

function verGlobal() {
  const localVar = "Local"; // Local : No puede ser llamado desde Afuera
}
verGlobal();

// ┌───────────────────────────────────┐
// │      4. Anidamiento               │
// └───────────────────────────────────┘
// Funcion 01
function exterior() {
  const externa = "Estoy afuera";
  // Funcion 02
  function interior() {
    const interna = "Estoy adentro";
    console.log(externa); // "Estoy afuera" (accede al scope superior)
    console.log(interna); // "Estoy adentro"
  }
  interior();
  // console.log(interna);  // Error: interna no está disponible aquí
}
exterior();

// ┌───────────────────────────────────┐
// │      5. let vs var vs const       │
// └───────────────────────────────────┘
const vieja = "Soy var"; // Scope funcional, redeclarable
let moderna = "Soy let"; // Scope de bloque, reasignable
const fija = "Soy const"; // Scope de bloque, no reasignable
moderna = "Cambié"; // Ok
// fija = "No puedo";     // Error: const no permite reasignación

console.log(vieja, moderna, fija);
