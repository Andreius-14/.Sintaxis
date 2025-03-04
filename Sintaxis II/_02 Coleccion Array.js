// ┌───────────────────────────────────┐
// │      1. Array Literal             │
// └───────────────────────────────────┘

const frutas = ['manzana', 'pera', 'uva']
frutas[1] = 'kiwi' // Modificación
console.log(frutas[0]) // "manzana" (acceso por índice)

// ┌───────────────────────────────────┐
// │      2. Array Constructor         │
// └───────────────────────────────────┘

const numeros = new Array(1, 2, 3) // Usando new Array()
const vacio = new Array(3) // Nota: new Array(3) crea array vacío con longitud 3

console.log(vacio) // [ <3 empty items> ]
console.log(numeros) // [1, 2, 3]

// ┌───────────────────────────────────┐
// │      3. Métodos Comunes           │
// └───────────────────────────────────┘

const lista = ['a', 'b', 'c']

lista.push('d') //  ["a", "b", "c", "d"]
lista.pop() //  ["a", "b", "c"]
lista.shift() //  ["b", "c"]
lista.unshift('z') //  ["z", "b", "c"]

console.log(lista.length) // 3
console.log(lista) // ["z", "b", "c"]

// ┌───────────────────────────────────┐
// │      4. Iteración                 │
// └───────────────────────────────────┘
const colores = ['rojo', 'azul']

for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]) // "rojo", "azul"


for (const color of colores) {
  console.log(color) // "rojo", "azul"
}

colores.forEach((color, i) => {
  console.log(`${i}: ${color}`) // "0: rojo", "1: azul"
})

// ┌───────────────────────────────────┐
// │      5. Métodos Transformadores   │
// └───────────────────────────────────┘
const valores = [1, 2, 3, 4]
const doblados = valores.map(x => x * 2) // [2, 4, 6, 8]
const filtrados = valores.filter(x => x > 2) // [3, 4]
const suma = valores.reduce((acc, x) => acc + x, 0) // 10
console.log(doblados, filtrados, suma)

// ┌───────────────────────────────────┐
// │      6. Variantes: Array-like     │
// └───────────────────────────────────┘
// Objetos que parecen arrays pero no lo son
const nodoLista = document.querySelectorAll('div') // NodeList (array-like)
const arrayLike = { 0: 'a', 1: 'b', length: 2 }
const convertido = Array.from(arrayLike) // ["a", "b"]
console.log(convertido)

// ┌───────────────────────────────────┐
// │      7. Similares: Typed Arrays   │
// └───────────────────────────────────┘
// Arrays tipados para datos binarios
const intArray = new Int32Array([1, 2, 3])
console.log(intArray[1]) // 2
// No tiene métodos como push o map, optimizado para números

// ┌───────────────────────────────────┐
// │      8. Spread y Destructuring    │
// └───────────────────────────────────┘
const original = [1, 2]
const copia = [...original] // Copia: [1, 2]
const [primero, segundo] = original // Destructuring: 1, 2
console.log(copia, primero)
