/*
┌──────────────────────────────┐
│        Try...Catch          │
└──────────────────────────────┘
*/

// ┌───────────────────────────────────┐
// │      1. Try...Catch Básico      │
// └───────────────────────────────────┘
// Intenta ejecutar código y captura errores
try {
  const resultado = variableNoDefinida // Error: variableNoDefinida no existe
  console.log(resultado)
} catch (error) {
  console.log('Error capturado:', error.message) // "Error capturado: variableNoDefinida is not defined"
}

// ┌───────────────────────────────────┐
// │      2. Con Finally            │
// └───────────────────────────────────┘
// Finally se ejecuta siempre, haya error o no
try {
  const numero = '123'
  console.log(numero / 2) // 61.5 (no hay error)
} catch (error) {
  console.log('Error:', error.message)
} finally {
  console.log('Esto siempre se ejecuta') // "Esto siempre se ejecuta"
}

// ┌───────────────────────────────────┐
// │      3. Throw Personalizado    │
// └───────────────────────────────────┘
// Lanza un error personalizado
try {
  const edad = -5
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa') // Lanza excepción
  }
  console.log('Edad válida')
} catch (error) {
  console.log('Excepción:', error.message) // "Excepción: La edad no puede ser negativa"
}

// ┌───────────────────────────────────┐
// │      4. Catch con Tipos         │
// └───────────────────────────────────┘
// Maneja errores específicos (aunque JS no los distingue por tipo nativamente)
try {
  JSON.parse('texto no válido') // Error de sintaxis JSON
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log('Error de sintaxis:', error.message) // "Error de sintaxis: Unexpected token t..."
  } else {
    console.log('Otro error:', error.message)
  }
}

// ┌───────────────────────────────────┐
// │      5. Try...Catch Anidado    │
// └───────────────────────────────────┘
// Maneja errores en niveles internos
try {
  try {
    throw new Error('Error interno')
  } catch (error) {
    console.log('Catch interno:', error.message) // "Catch interno: Error interno"
    throw error // Relanza el error al nivel superior
  }
} catch (error) {
  console.log('Catch externo:', error.message) // "Catch externo: Error interno"
}
