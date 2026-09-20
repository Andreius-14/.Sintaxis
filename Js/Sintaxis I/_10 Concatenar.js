// ═════════════════════════════════════
//              Concatenación
// ═════════════════════════════════════

const texto1 = 'Hola'
const texto2 = 'mundo'
const num = 42

// ┌───────────────────────────────────┐
// │      1. Operador +                │
// └───────────────────────────────────┘
const conMas = texto1 + ' ' + texto2 // "Hola mundo"
const conNum = texto1 + num // "Hola42" (convierte num a string)

// ┌───────────────────────────────────┐
// │      2. Template Literals         │
// └───────────────────────────────────┘
const conTemplate = `${texto1} ${texto2}` // "Hola mundo" (con comillas inversas ``)
const conExpr = `${texto1} tiene ${num}` // "Hola tiene 42" (permite expresiones)

// ┌───────────────────────────────────┐
// │      3. Método concat()           │
// └───────────────────────────────────┘
const conConcat = texto1.concat(' ', texto2) // "Hola mundo"
const multiConcat = texto1.concat(' ', texto2, '!', num) // "Hola mundo!42"

// ┌───────────────────────────────────┐
// │      4. Array join()              │
// └───────────────────────────────────┘
const array = [texto1, texto2]
const conJoin = array.join(' ') // "Hola mundo" (une elementos con separador)

// ┌───────────────────────────────────┐
// │      5. += Operador               │
// └───────────────────────────────────┘
let acumulador = texto1
acumulador += ' ' + texto2 // "Hola mundo" (suma y asigna)

console.log(conMas, conTemplate, conConcat, conJoin, acumulador)
