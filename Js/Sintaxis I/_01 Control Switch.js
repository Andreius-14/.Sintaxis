/*
┌──────────────────────────────┐
│         Estructura Switch    │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. Switch Básico           │
// └───────────────────────────────────┘
// Evalúa una expresión y coincide con casos
const dia = 3
switch (dia) {
  case 1:
    console.log('Lunes')
    break // Sale del switch
  case 2:
    console.log('Martes')
    break
  case 3:
    console.log('Miércoles') // "Miércoles" (coincide con 3)
    break
  default:
    console.log('Día no válido') // Si no hay coincidencia
}

// ┌───────────────────────────────────┐
// │      2. Sin Break (Fall-through)│
// └───────────────────────────────────┘
// Si omites break, ejecuta todos los casos siguientes
const fruta = 'manzana'
switch (fruta) {
  case 'manzana':
    console.log('Es roja')
    // Sin break, sigue al siguiente caso
  case 'pera':
    console.log('Es dulce') // "Es roja", "Es dulce"
    break
  default:
    console.log('Fruta desconocida')
}

// ┌───────────────────────────────────┐
// │      3. Múltiples Casos         │
// └───────────────────────────────────┘
// Agrupa casos que comparten resultado
const mes = 'enero'
switch (mes) {
  case 'diciembre':
  case 'enero':
  case 'febrero':
    console.log('Invierno') // "Invierno" (enero está en el grupo)
    break
  case 'marzo':
  case 'abril':
    console.log('Primavera')
    break
  default:
    console.log('Otro mes')
}

// ┌───────────────────────────────────┐
// │      4. Switch con Expresiones  │
// └───────────────────────────────────┘
// Usa expresiones como casos
const numero = 5
switch (true) { // Evalúa qué caso es true
  case numero > 0:
    console.log('Positivo') // "Positivo"
    break
  case numero < 0:
    console.log('Negativo')
    break
  default:
    console.log('Cero')
}

// ┌───────────────────────────────────┐
// │      5. Switch con Bloques      │
// └───────────────────────────────────┘
// Usa bloques {} para más lógica
const tipo = 'admin'
switch (tipo) {
  case 'admin': {
    const acceso = 'total'
    console.log(`Acceso: ${acceso}`) // "Acceso: total"
    break
  }
  case 'user': {
    const acceso = 'limitado'
    console.log(`Acceso: ${acceso}`)
    break
  }
  default:
    console.log('Sin acceso')
}
