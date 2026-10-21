"use strict";
// nivel de acceso 
// - public 
// - protected  : privadoi y accesible de sus herencias
// - private 
//    Funciona dentro de su propia casa  dentro de la clase
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona.prototype.saludar = function () {
        this.esDev();
        return "Hola mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.esDev = function () {
        return this.esDesarrollador;
    };
    return Persona;
}());
exports.Persona = Persona;
// instancia 
// let persona = new Persona("Juan", 30,true);
//
// console.log(persona.saludar());
