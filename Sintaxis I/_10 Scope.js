// ═════════════════════════════════════
//                Scope
// ═════════════════════════════════════

// Scope define dónde una variable está disponible

// ┌───────────────────────────────────┐
// │      1. Scope Global              │
// └───────────────────────────────────┘
const globalVar = 'Soy global' // Accesible en todo el archivo
function verGlobal () {
  console.log(globalVar) // "Soy global" (visible aquí)
}
verGlobal()

// ┌───────────────────────────────────┐
// │      2. Scope Local (Function)    │
// └───────────────────────────────────┘
function scopeLocal () {
  const localVar = 'Soy local' // Solo existe dentro de esta función
  console.log(localVar) // "Soy local"
}
scopeLocal()
// console.log(localVar);        // Error: localVar no está definida fuera

// ┌───────────────────────────────────┐
// │      3. Scope de Bloque           │
// └───────────────────────────────────┘
if (true) {
  const bloqueVar = 'Soy de bloque' // Solo vive en este bloque con let/const
  var noBloque = 'No respeto bloques' // var ignora bloques, sube al scope superior
  console.log(bloqueVar) // "Soy de bloque"
}
// console.log(bloqueVar);              // Error: no accesible fuera del bloque
console.log(noBloque) // "No respeto bloques" (var es global o funcional)

// ┌───────────────────────────────────┐
// │      4. Anidamiento               │
// └───────────────────────────────────┘
function exterior () {
  const externa = 'Estoy afuera'
  function interior () {
    const interna = 'Estoy adentro'
    console.log(externa) // "Estoy afuera" (accede al scope superior)
    console.log(interna) // "Estoy adentro"
  }
  interior()
  // console.log(interna);  // Error: interna no está disponible aquí
}
exterior()

// ┌───────────────────────────────────┐
// │      5. let vs var vs const       │
// └───────────────────────────────────┘
const vieja = 'Soy var' // Scope funcional, redeclarable
let moderna = 'Soy let' // Scope de bloque, reasignable
const fija = 'Soy const' // Scope de bloque, no reasignable
moderna = 'Cambié' // Ok
// fija = "No puedo";     // Error: const no permite reasignación

console.log(vieja, moderna, fija)
