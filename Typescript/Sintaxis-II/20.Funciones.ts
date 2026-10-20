
function logMessage(message:string):void {
    console.log("log message", message);
};
logMessage("Este es un mensaje log");


function sumar(numero1:number , numero2:number):number { 
    return numero1 + numero2
    
}

function resta(numero1:number , numero2:number):number { 
    return numero1 - numero2
    
}

// Parametro opcional ???? 
function saludar(nombre:string,saludo?:string) {
    if (saludo ) {
        return `${saludo}, ${nombre}`
    } else {
        return `Hola . ${nombre}!`
    }
}

function despedida(nombre:string,despedida:string = "Adios") :string{
    return `${despedida}, ${nombre}`
}
// Interpolacion eenviados en funcion
function sumarTodos(...numeros: number[]):number {
    return numeros.reduce((acumulado,actual)=>acumulado + actual,0)
}

// ──────────────────────────────────────────────────────────────────────
let r :number = sumar(5,10)

console.log("Suma", sumar(5,10));
console.log("Resta", resta(5,10));

// ──────────────────────────────────────────────────────────────────────
console.log(saludar("Amin"));
console.log(saludar("Amin","Buenos dias"));
// ──────────────────────────────────────────────────────────────────────
console.log("Rsultado de sumar todos: ", sumarTodos(1,2,3,4,5,6,7,8,9));
// ──────────────────────────────────────────────────────────────────────

console.log(despedida("Amin"));
console.log(despedida("Amin", "Hasta Luego"));





// function throwError(message:string):never {
//     throw new Error(message)
// };
//
// throwError("Este es un error");
//

