// ┌───────────────────────────────────┐
// │                &&                 │
// └───────────────────────────────────┘

const nombre1 = "Ana";
const edad1 = 25;

// Usar && para verificar si ambas condiciones son truthy
const puedeEntrar = nombre1 && edad1 >= 18;
console.log(puedeEntrar); // Imprime: true (porque "Ana" es truthy y 25 >= 18 es true)

// Ejemplo con un valor falsy
const usuario = "";
const contraseña = "12345";
const loginValido = usuario && contraseña;
console.log(loginValido); // Imprime: "" (devuelve el primer valor falsy: usuario)

// Ejemplo con cortocircuito
const mensaje = nombre && "Bienvenida, " + nombre;
console.log(mensaje); // Imprime: "Bienvenida, Ana"

// ┌───────────────────────────────────┐
// │                ||                 │
// └───────────────────────────────────┘

let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "no tengo web";

console.log("Hola " + nombre);
console.log("Mi web es " + web);

const nombreUsuario = "";
const nombrePorDefecto = "Invitado";

// Usar || para asignar un valor por defecto
const nombreFinal = nombreUsuario || nombrePorDefecto;
console.log(nombreFinal); // Imprime: "Invitado" (porque "" es falsy)

// Ejemplo con valores truthy
const colorFavorito = "azul";
const colorAlternativo = "verde";
const colorElegido = colorFavorito || colorAlternativo;
console.log(colorElegido); // Imprime: "azul" (devuelve el primer valor truthy)

// Ejemplo con cortocircuito
const configuracion = null;
const configPorDefecto = { tema: "oscuro" };
const configFinal = configuracion || configPorDefecto;
console.log(configFinal); // Imprime: { tema: "oscuro" }
// ┌───────────────────────────────────┐
// │                ??                 │
// └───────────────────────────────────┘
function saluda(nombre) {
  nombre ??= "Alumno"; // Si no tiene valor (undefined), valdrá "Alumno"
  alert("Hola " + nombre);
}

saluda(); // Hola Alumno
saluda("Pepe"); // Hola Pepe
// ┌───────────────────────────────────┐
// │                 ?                 │
// └───────────────────────────────────┘

const usuario1 = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
  },
};

console.log(usuario1?.direccion?.ciudad); // Imprime: "Madrid"
console.log(usuario1?.contacto?.telefono); // Imprime: undefined (no genera error)

// ══════════════════════════════════════════════════════════════════════════
//                         Operadores Especiales
// ══════════════════════════════════════════════════════════════════════════

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
