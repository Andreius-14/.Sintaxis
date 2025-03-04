/*
┌──────────────────────────────┐
│         Estructuras IF       │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. If Simple                 │
// └───────────────────────────────────┘
// Ejecuta código si la condición es verdadera
const edad = 20
if (edad >= 18) {
  console.log('Eres mayor de edad') // Se ejecuta si true
}

// ┌───────────────────────────────────┐
// │      2. If...Else                 │
// └───────────────────────────────────┘
// Añade alternativa si la condición es falsa
const hora = 14
if (hora < 12) {
  console.log('Buenos días')
} else {
  console.log('Buenas tardes') // "Buenas tardes" (hora >= 12)
}

// ┌───────────────────────────────────┐
// │      3. If...Else If...Else       │
// └───────────────────────────────────┘
// Varias condiciones en cadena
const nota = 85
if (nota >= 90) {
  console.log('Aprobado con A')
} else if (nota >= 70) {
  console.log('Aprobado con B') // "Aprobado con B" (85 está entre 70 y 89)
} else if (nota >= 50) {
  console.log('Aprobado con C')
} else {
  console.log('Reprobado')
}

// ┌───────────────────────────────────┐
// │      4. If Anidado                │
// └───────────────────────────────────┘
// If dentro de otro if
const usuario = 'admin'
const logueado = true
if (logueado) {
  if (usuario === 'admin') {
    console.log('Acceso administrador') // "Acceso administrador"
  } else {
    console.log('Acceso usuario normal')
  }
} else {
  console.log('No estás logueado')
}

// ┌───────────────────────────────────┐
// │      5. Operador Ternario         │
// └───────────────────────────────────┘
// Versión abreviada de if...else
const temperatura = 25
let clima = temperatura > 20 ? 'Cálido' : 'Frío' // "Cálido"
// Equivalente a:
if (temperatura > 20) {
  clima = 'Cálido'
} else {
  clima = 'Frío'
}

// ┌───────────────────────────────────┐
// │      Similitudes y Notas          │
// └───────────────────────────────────┘
// - Todas evalúan condiciones (true/false)
// - Usan paréntesis () para la condición
const x = 10
// Ejemplo con múltiples condiciones
if (x > 0 && x < 15) { // AND lógico
  console.log('x está entre 0 y 15') // Se ejecuta
}
// Con cortocircuito (|| OR, && AND)
const valor = null
if (valor ?? 'default') { // ?? evalúa null/undefined
  console.log('Tiene valor o default')
}

console.log(clima, x)
