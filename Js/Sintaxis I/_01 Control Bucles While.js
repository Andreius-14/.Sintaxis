/*
┌──────────────────────────────┐
│        Bucles While          │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. While Clásico             │
// └───────────────────────────────────┘
// Ejecuta mientras la condición sea verdadera
let contador = 0
while (contador < 3) {
  console.log(`Contador: ${contador}`) // 0, 1, 2
  contador++ // Incrementa para evitar bucle infinito
}
// Nota: Si la condición es falsa al inicio, no entra al bucle

// ┌───────────────────────────────────┐
// │      2. Do...While                │
// └───────────────────────────────────┘
// Ejecuta al menos UNA vez, luego verifica la condición
let numero = 0
do {
  console.log(`Número: ${numero}`) // 0, 1, 2
  numero++
} while (numero < 3)
// Diferencia: Corre primero y evalúa después

// ┌───────────────────────────────────┐
// │      Ejemplo Comparativo          │
// └───────────────────────────────────┘
let inicio = 5
console.log('Con while:')
while (inicio < 5) { // Falso desde el inicio
  console.log('No entra aquí') // Nunca se ejecuta
}

console.log('Con do...while:')
do {
  console.log(`Inicio: ${inicio}`) // "Inicio: 5" (se ejecuta una vez)
  inicio++
} while (inicio < 5) // Condición falsa, termina tras 1 iteración
