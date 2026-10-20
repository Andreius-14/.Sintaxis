function logMessage(message) {
    console.log("log message", message);
}
;
logMessage("Este es un mensaje log");
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function resta(numero1, numero2) {
    return numero1 - numero2;
}
// Parametro opcional ???? 
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola . ".concat(nombre, "!");
    }
}
function despedida(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    return "".concat(despedida, ", ").concat(nombre);
}
// Interpolacion eenviados en funcion
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
// ──────────────────────────────────────────────────────────────────────
var r = sumar(5, 10);
console.log("Suma", sumar(5, 10));
console.log("Resta", resta(5, 10));
// ──────────────────────────────────────────────────────────────────────
console.log(saludar("Amin"));
console.log(saludar("Amin", "Buenos dias"));
// ──────────────────────────────────────────────────────────────────────
console.log("Rsultado de sumar todos: ", sumarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9));
// ──────────────────────────────────────────────────────────────────────
console.log(despedida("Amin"));
console.log(despedida("Amin", "Hasta Luego"));
// function throwError(message:string):never {
//     throw new Error(message)
// };
//
// throwError("Este es un error");
//
