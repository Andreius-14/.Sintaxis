interface Direccion {
    calle:string;
    numero: number;
    ciudad?:string;
}

interface Persona{
    // no se edita
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}
// ──────────────────────────────────────────────────────────────────────
let direccion:Direccion = {
    calle: 'calle falsa',
    numero:13,

}

console.log(direccion);
// ──────────────────────────────────────────────────────────────────────
let personaRead: Persona = {
    nombre:"Amin",
    edad:39,
    esDesarrollador:true
}

console.log(personaRead);


// Error: No  hecho para modificarse da errror
// personaRead.nombre = "Marce";

//╭─────────────────────────────────────────────────────────╮
//│                        Herencia                         │
//╰─────────────────────────────────────────────────────────╯


interface empleado extends Persona{
    readonly puesto: string;

}

let empleadoRead: empleado = {
 nombre: "Amin",
 edad:39,
 esDesarrollador:true,
 puesto:"Desarollador senior"
};
console.log("Empleado: ", empleadoRead);






