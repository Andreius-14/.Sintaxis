// Array 
var nombres = ["Amin", "marce", "miranda"];
console.log("Nombres: ", nombres);
var edades = [39, 25, 30];
console.log("Edades: ", edades);
var mixto = ["Amin", 349, true];
console.log("Mixto: ", mixto);
var personas = [
    { nombre: "Amin", edad: 19, esDesarrollador: true },
    { nombre: "juan", edad: 19, esDesarrollador: false },
    { nombre: "Maria", edad: 19, esDesarrollador: true }
];
personas.push({ nombre: "Mirando", edad: 30, esDesarrollador: true });
console.log("Personas", personas);
// Tupla 
// - Inmutable
var persona;
persona = ["Amin", 39, true];
console.log("Persona: ", persona);
var personaTupla = [];
personaTupla.push(["Amin", 39, true]);
personaTupla.push(["Marce", 40, true]);
personaTupla.push(["Miranda", 7, false]);
personaTupla.forEach(function (persona) {
    console.log("Persona", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: ", esDesarrollador);
});
// Enumeradores 
// Brnda por defeecto un valor nueumericoco si no hay asignacion explicita
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["lunes"] = 0] = "lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Domingo;
console.log("Dia: ", dia);
console.log("Dia: ", DiaDeLaSemana[dia]);
