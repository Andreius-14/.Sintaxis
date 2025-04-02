// ┌───────────────────────────────────┐
// │                &&                 │
// └───────────────────────────────────┘

let nombre1 = "Ana";
let edad1 = 25;

// Usar && para verificar si ambas condiciones son truthy
let puedeEntrar = nombre1 && edad1 >= 18;
console.log(puedeEntrar); // Imprime: true (porque "Ana" es truthy y 25 >= 18 es true)

// Ejemplo con un valor falsy
let usuario = "";
let contraseña = "12345";
let loginValido = usuario && contraseña;
console.log(loginValido); // Imprime: "" (devuelve el primer valor falsy: usuario)

// Ejemplo con cortocircuito
let mensaje = nombre && "Bienvenida, " + nombre;
console.log(mensaje); // Imprime: "Bienvenida, Ana"

// ┌───────────────────────────────────┐
// │                ||                 │
// └───────────────────────────────────┘
let nombreUsuario = "";
let nombrePorDefecto = "Invitado";

// Usar || para asignar un valor por defecto
let nombreFinal = nombreUsuario || nombrePorDefecto;
console.log(nombreFinal); // Imprime: "Invitado" (porque "" es falsy)

// Ejemplo con valores truthy
let colorFavorito = "azul";
let colorAlternativo = "verde";
let colorElegido = colorFavorito || colorAlternativo;
console.log(colorElegido); // Imprime: "azul" (devuelve el primer valor truthy)

// Ejemplo con cortocircuito
let configuracion = null;
let configPorDefecto = { tema: "oscuro" };
let configFinal = configuracion || configPorDefecto;
console.log(configFinal); // Imprime: { tema: "oscuro" }
// ┌───────────────────────────────────┐
// │                ??                 │
// └───────────────────────────────────┘

// ┌───────────────────────────────────┐
// │                 ?                 │
// └───────────────────────────────────┘

let usuario1 = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
  },
};

console.log(usuario1?.direccion?.ciudad); // Imprime: "Madrid"
console.log(usuario1?.contacto?.telefono); // Imprime: undefined (no genera error)

// ═════════════════════════════════════
//        Operadores Especiales
// ═════════════════════════════════════

// ┌───────────────────────────────────┐
// │            Ternario               │
// └───────────────────────────────────┘
const resultado = a > b ? "mayor" : "menor"; // "mayor" (if corto)

function saludar(persona, sexo) {
  return sexo == "m"
    ? `Bienvenido a EDteam, ${persona}`
    : `Bienvenida a EDteam, ${persona}`;
}

console.log(saludar("Beto", "m"));
console.log(saludar("Alexys", "m"));
console.log(saludar("Juan Carlos", "m"));
console.log(saludar("Maria", "f"));
