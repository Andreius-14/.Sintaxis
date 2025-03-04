/*
┌──────────────────────────────┐
│   Arrays Multidimensionales │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. Array 2D (Bidimensional)│
// └───────────────────────────────────┘
// Array de arrays, como una matriz
const matriz = [
  [1, 2, 3], // Fila 0
  [4, 5, 6], // Fila 1
  [7, 8, 9] // Fila 2
]
console.log(matriz[1][2]) // 6 (fila 1, columna 2)
matriz[0][1] = 10 // Modifica: [1, 10, 3]
console.log(matriz) // [[1, 10, 3], [4, 5, 6], [7, 8, 9]]

// ┌───────────────────────────────────┐
// │      2. Creación Dinámica      │
// └───────────────────────────────────┘
// Generar matriz con bucles
const filas = 3; const columnas = 4
const dinamico = []
for (let i = 0; i < filas; i++) {
  dinamico[i] = [] // Crea fila vacía
  for (let j = 0; j < columnas; j++) {
    dinamico[i][j] = i + j // Rellena con suma de índices
  }
}
console.log(dinamico) // [[0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5]]

// ┌───────────────────────────────────┐
// │      3. Array 3D (Tridimensional)│
// └───────────────────────────────────┘
// Array de arrays de arrays
const cubo = [
  [[1, 2], [3, 4]], // Capa 0
  [[5, 6], [7, 8]] // Capa 1
]
console.log(cubo[1][0][1]) // 6 (capa 1, fila 0, columna 1)
cubo[0][1][0] = 9 // Modifica: [[1, 2], [9, 4]]
console.log(cubo) // [[[1, 2], [9, 4]], [[5, 6], [7, 8]]]

// ┌───────────────────────────────────┐
// │      4. Iteración              │
// └───────────────────────────────────┘
// Recorrer matriz 2D
const tabla = [[10, 20], [30, 40]]
for (let i = 0; i < tabla.length; i++) {
  for (let j = 0; j < tabla[i].length; j++) {
    console.log(`[${i}][${j}] = ${tabla[i][j]}`) // "0,0 = 10", "0,1 = 20", etc.
  }
}
// Usando forEach
tabla.forEach((fila, i) => {
  fila.forEach((valor, j) => console.log(`[${i},${j}] = ${valor}`))
})

// ┌───────────────────────────────────┐
// │      5. Métodos y Multidimensión│
// └───────────────────────────────────┘
const datos = [[1, 2], [3, 4]]
const aplanado = datos.flat() // [1, 2, 3, 4] (aplana 1 nivel)
const mapped = datos.map(fila => fila.map(x => x * 2)) // [[2, 4], [6, 8]]
console.log(aplanado, mapped)

// ┌───────────────────────────────────┐
// │      6. Ejemplo Práctico       │
// └───────────────────────────────────┘
// Matriz como tablero de juego
const tablero = [
  ['X', 'O', ' '],
  [' ', 'X', 'O'],
  ['O', ' ', 'X']
]
console.log(tablero[1][1]) // "X" (centro del tablero)
