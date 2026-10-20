// Array 
let nombres: string [] = ["Amin", "marce", "miranda"]
console.log("Nombres: " , nombres);


let edades: number[] = [39,25,30];
console.log("Edades: ", edades);

let mixto: any[] = ["Amin", 349, true];

console.log("Mixto: " , mixto);


// Interfaces 

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

}

let personas: Persona[] = [
    {nombre:"Amin", edad:19, esDesarrollador:true},
    {nombre:"juan", edad:19, esDesarrollador:false},
    {nombre:"Maria", edad:19, esDesarrollador:true}
];

personas.push({nombre:"Mirando",edad:30, esDesarrollador:true})

console.log("Personas", personas);

// Tupla 
// - Inmutable

let persona: [string,number,boolean]
persona = ["Amin",39,true];

console.log("Persona: ", persona);


let personaTupla: [string,number,boolean][] = [];
personaTupla.push(["Amin",39,true]);
personaTupla.push(["Marce",40,true]);
personaTupla.push(["Miranda",7,false])

personaTupla.forEach(persona  => {
    console.log("Persona", persona);

    let nombre:string = persona[0];
    let edad: number = persona [1];
    let esDesarrollador: boolean = persona [2];

    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: " , esDesarrollador);
    
    
    
});

// Enumeradores 

// Brnda por defeecto un valor nueumericoco si no hay asignacion explicita

enum DiaDeLaSemana {
    lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}


let dia: DiaDeLaSemana = DiaDeLaSemana.Domingo;
console.log("Dia: ", dia);
console.log("Dia: ", DiaDeLaSemana[dia]);


