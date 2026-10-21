function identify(arg) {
    return arg;
}
var output1 = identify("Hola");
var output2 = identify(19);
console.log("Output 1: " + output1);
console.log("Output 2: " + output2);
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    /**
     * obtenerContenido
     */
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeString = new Caja("Libros");
console.log("Contendio de la caja de string: ", cajaDeString.obtenerContenido());
