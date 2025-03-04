// ┌───────────────────────────────────┐
// │      1. Creación y Uso Básico  │
// └───────────────────────────────────┘
// Colección de pares clave-valor, claves de cualquier tipo
const mapa = new Map()
mapa.set('nombre', 'Ana') // Clave string
mapa.set(1, 'primero') // Clave number
mapa.set({ id: 42 }, 'objeto') // Clave objeto
console.log(mapa.get('nombre')) // "Ana"
console.log(mapa.size) // 3

// ┌───────────────────────────────────┐
// │      2. Métodos Principales    │
// └───────────────────────────────────┘
mapa.set('edad', 25) // Agrega o actualiza
console.log(mapa.has('edad')) // true (verifica existencia)

mapa.delete('edad') // Elimina
console.log(mapa.has('edad')) // false

mapa.clear() // Borra todo
console.log(mapa.size) // 0

// ┌───────────────────────────────────┐
// │      3. Iteración              │
// └───────────────────────────────────┘
const nuevoMapa = new Map([['a', 1], ['b', 2]])
for (const [clave, valor] of nuevoMapa) {
  console.log(`${clave}: ${valor}`) // "a: 1", "b: 2"
}
nuevoMapa.forEach((valor, clave) => {
  console.log(`${clave} -> ${valor}`) // "a -> 1", "b -> 2"
})
console.log([...nuevoMapa]) // [["a", 1], ["b", 2]]

// ┌───────────────────────────────────┐
// │      4. Ventajas sobre Object  │
// └───────────────────────────────────┘
// Claves no limitadas a strings, orden preservado
const objClave = { tipo: 'clave' }
const mapa2 = new Map()
mapa2.set(objClave, 'valor')
console.log(mapa2.get(objClave)) // "valor"
