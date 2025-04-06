// ┌───────────────────────────────────┐
// │      CONFIRM                      │
// └───────────────────────────────────┘

// 1. alert() - Muestra un diálogo emergente con mensaje
alert("¡Hola, mundo!"); // Ventana con "¡Hola, mundo!" y botón "OK"
// Nota: Bloquea ejecución hasta que el usuario hace clic en OK

// ┌───────────────────────────────────┐
// │      CONSOLE                      │
// └───────────────────────────────────┘

// Salida básica
console.log("Hola, mundo");
// > Hola, mundo

// Información (similar a log)
console.info("App iniciada");
// > ℹ App iniciada

// Advertencia (suele ser amarillo)
console.warn("Valor bajo");
// > ⚠ Valor bajo

// Error (suele ser rojo)
console.error("División por cero");
// > ⨯ División por cero

// Depuración (puede filtrarse)
console.debug("x = 5");
// > 🛠 x = 5

// Limpia la Pantalla
console.clear();
// ┌───────────────────────────────────┐
// │      CONSOLE  -  Interfaz         │
// └───────────────────────────────────┘

// console.table() - Tabla para datos estructurados
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 },
];
console.table(usuarios);
/*
> ┌─────────┬────────┬──────┐
  │ (index) │ nombre │ edad │
  ├─────────┼────────┼──────┤
  │    0    │  Ana   │  25  │
  │    1    │  Juan  │  30  │
  └─────────┴────────┴──────┘
*/

// console.dir() - Árbol interactivo de objeto
const obj = { a: 1, b: { c: 2 } };
console.dir(obj);
/*
> ▼ Object
    a: 1
    ▼ b: Object
        c: 2
*/

// ┌───────────────────────────────────┐
// │      CONSOLE  -  ESPECIALES       │
// └───────────────────────────────────┘

// console.group() y groupEnd() - Agrupa mensajes
console.group("Datos");
console.log("Nombre: Ana");
console.log("Edad: 25");
console.groupEnd();
/*
> ▼ Datos
    Nombre: Ana
    Edad: 25
*/

// console.time() y timeEnd() - Mide tiempo
console.time("Ciclo");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("Ciclo");
// > Ciclo: 0.123ms (tiempo varía)

// console.count() - Cuenta cuántas veces se llama con una etiqueta
console.count("Ciclo"); // Cuenta la primera vez
console.count("Ciclo"); // Cuenta la segunda vez
console.count("Otro"); // Cuenta por separado con otra etiqueta
console.count("Ciclo"); // Cuenta la tercera vez
// > Ciclo: 1
// > Ciclo: 2
// > Otro: 1
// > Ciclo: 3
