// ═════════════════════════════════════
//              Bucles For
// ═════════════════════════════════════

// ┌───────────────────────────────────┐
// │      1. For Clásico               │
// └───────────────────────────────────┘
// Estructura: for (inicio; condición; paso)
for (let i = 0; i < 3; i++) {
  console.log(`Iteración ${i}`) // 0, 1, 2
}
// Útil para contar o iterar un número fijo de veces

// ┌───────────────────────────────────┐
// │      2. For...in                  │
// └───────────────────────────────────┘
// Itera sobre las PROPIEDADES ENUMERABLES de un objeto
const objeto = { a: 1, b: 2, c: 3 }
for (const clave in objeto) {
  console.log(`${clave}: ${objeto[clave]}`) // "a: 1", "b: 2", "c: 3"
}

const obj = { a: 1, b: 2, c: 3 }

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`)
}
// Output: "a: 1", "b: 2", "c: 3"
// Cuidado: también itera propiedades heredadas, mejor para objetos

// ┌───────────────────────────────────┐
// │      3. For...of                  │
// └───────────────────────────────────┘
//  ITERABLES (arrays, strings, etc.)
const array = ['manzana', 'pera', 'uva']
for (const fruta of array) {
  console.log(fruta) // "manzana", "pera", "uva"
}
// Ejemplo con string:
const texto = 'Hola'
for (const letra of texto) {
  console.log(letra) // "H", "o", "l", "a"
}
// Perfecto para arrays o iterables, no para objetos simples

// ┌───────────────────────────────────┐
// │      FOR -- Anidado               │
// └───────────────────────────────────┘
const mezcla = [{ id: 1 }, { id: 2 }]
for (let i = 0; i < mezcla.length; i++) { // For clásico para índice
  for (const clave in mezcla[i]) { // For...in para propiedades
    console.log(`Prop: ${clave}`) // "Prop: id"
  }
  for (const valor of Object.values(mezcla[i])) { // For...of para valores
    console.log(`Valor: ${valor}`) // "Valor: 1", "Valor: 2"
  }
}
