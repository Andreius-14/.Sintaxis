// ┌───────────────────────────────────┐
// │      1. Creación y Uso Básico  │
// └───────────────────────────────────┘
// Colección de valores únicos
const conjunto = new Set()
conjunto.add(1)
conjunto.add(2)
conjunto.add(1) // Duplicado, se ignora
console.log(conjunto.size) // 2
console.log(conjunto.has(2)) // true

// ┌───────────────────────────────────┐
// │      2. Métodos Principales    │
// └───────────────────────────────────┘
const setFrutas = new Set(['manzana', 'pera'])
setFrutas.add('uva') // Agrega
console.log(setFrutas.has('pera')) // true
setFrutas.delete('manzana') // Elimina
console.log(setFrutas.size) // 2
setFrutas.clear() // Borra todo
console.log(setFrutas.size) // 0

// ┌───────────────────────────────────┐
// │      3. Iteración              │
// └───────────────────────────────────┘
const nuevoSet = new Set([1, 2, 3])
for (const valor of nuevoSet) {
  console.log(valor) // 1, 2, 3
}
nuevoSet.forEach(valor => {
  console.log(valor) // 1, 2, 3
})
console.log([...nuevoSet]) // [1, 2, 3]

// ┌───────────────────────────────────┐
// │      4. Uso Práctico           │
// └───────────────────────────────────┘
// Eliminar duplicados de un array
const duplicados = [1, 2, 2, 3, 3, 4]
const unicos = [...new Set(duplicados)]
console.log(unicos) // [1, 2, 3, 4]
