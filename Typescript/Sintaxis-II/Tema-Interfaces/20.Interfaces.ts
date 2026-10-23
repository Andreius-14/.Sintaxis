// Una interfacce no es una clase p pero claro se parecen
interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

}

interface Sumar {
    (a: number, b: number): number;
}
// ──────────────────────────────────────────────────────────────────────
let persona: Persona = {
    nombre: "Amy",
    edad: 18,
    esDesarrollador: true
}


let personas: Persona[] = [{
    nombre: "Amy",
    edad: 18,
    esDesarrollador: true
}, {
    nombre: "Amy",
    edad: 18,
    esDesarrollador: true
}, {
    nombre: "Amy",
    edad: 18,
    esDesarrollador: true
}]


console.log("Persona: ", persona);
console.log("Personas Array: ", personas);
// ──────────────────────────────────────────────────────────────────────

let sumar: Sumar = (a: number, b: number): number => {
    return a + b;
}

console.log("Resultado de sumar: ", sumar(5, 3));

