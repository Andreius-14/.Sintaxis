import { Empleado } from "./Herencia.02";

let empleado = new Empleado("Amin", 39, true, "Desarrollador senior")


console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre: ", empleado.nombre);

