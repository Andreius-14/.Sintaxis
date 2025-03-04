// 1. Function Declaration
function saludar (nombre) {
  return `Hola, ${nombre}`
}
console.log(saludar('Ana')) // "Hola, Ana"

// 2. Function Expression
const despedir = function (nombre) {
  return `Adiós, ${nombre}`
}
console.log(despedir('Juan')) // "Adiós, Juan"

// 3. Arrow Function
const sumar = (a, b) => a + b
console.log(sumar(2, 3)); // 5

// 4. IIFE
(function () {
  console.log('Ejecutada');
})() // "Ejecutada"

// 5. Constructor Function
function Persona (nombre) {
  this.nombre = nombre
}
const persona1 = new Persona('María')
console.log(persona1.nombre) // "María"

// 6. Method
const coche = {
  marca: 'Toyota',
  arrancar () {
    return `${this.marca} en marcha`
  }
};
console.log(coche.arrancar()) // "Toyota en marcha"

// 7. Generator Function
//function* gener
