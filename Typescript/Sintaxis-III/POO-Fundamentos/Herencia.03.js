"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Herencia_02_1 = require("./Herencia.02");
var empleado = new Herencia_02_1.Empleado("Amin", 39, true, "Desarrollador senior");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre: ", empleado.nombre);
