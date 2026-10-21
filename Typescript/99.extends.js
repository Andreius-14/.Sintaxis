//╭─────────────────────────────────────────────────────────╮
//│                         extends                         │
//╰─────────────────────────────────────────────────────────╯
// mas aya de la herencia 
// podemos dar mas poderees a las funciones nativas 
var nombre = "Amin";
console.log(nombre.length);
// function obtenerLongitud<T extends { length: number }>(obj: T): number {
//   return obj.length;
// }
function obtenerLongitud(obj) {
    var longitud = typeof obj;
    var tipo = typeof obj;
    console.log("El tipo de dato es: ".concat(tipo, " y la longitud es ").concat(longitud));
    return obj.length;
}
console.log(obtenerLongitud("Hola"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
