
//╭─────────────────────────────────────────────────────────╮
//│                         extends                         │
//╰─────────────────────────────────────────────────────────╯

// mas aya de la herencia 
// podemos dar mas poderees a las funciones nativas 

let nombre: string = "Amin";

console.log(nombre.length);


// function obtenerLongitud<T extends { length: number }>(obj: T): number {
//   return obj.length;
// }
function obtenerLongitud<T extends { length: number }>(obj: T): number {
  let longitud: string = typeof obj;
  let tipo: string = typeof obj;

  console.log(`El tipo de dato es: ${tipo} y la longitud es ${longitud}`);
  return obj.length;
}

console.log(obtenerLongitud("Hola"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));

