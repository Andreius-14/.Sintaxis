// ┌───────────────────────────────────┐
// │                &&                 │
// └───────────────────────────────────┘
// Mis Notas Personales:
// - No devuelve un lado como solo arroja true o false
// - Como en matematiccas tiene prioridad sobre ||
// - Como matematicas eliges cual tiene prioridad con ()
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

// - Si existe lo reemplazo
// - Reemplazo SI, La Derecha es True
const accion = 1;
const b = 0;

accion &&= 2;
console.log(accion); // Expected output: 2

b &&= 2;
console.log(b); // Expected output: 0
// ┌───────────────────────────────────┐
// │                ||                 │
// └───────────────────────────────────┘
// [Operador lógico OR]
// - Omite  false
// - Omite  ""
// - Omite  ''
// - Omite  ``
// - Omite  0
// - Omite  undefined
// - Omite  NaN
//
// Mis Notas Personales:
// - Devuelve el lado que lance True
//
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
// [operador de fusión nulo]
// - Detecta Null
// - Detecta undefined
//
// Mis Notas Personales:
// - Es como el respaldo de Emergencia
// - Una mejor alternativa a || ya que este erra con el numero "0" o "" cadenas vacias
function saluda(nombre) {
  nombre ??= "Alumno"; // Si no tiene valor (undefined), valdrá "Alumno"
  alert("Hola " + nombre);
}

saluda(); // Hola Alumno
saluda("Pepe"); // Hola Pepe
// ┌───────────────────────────────────┐
// │                 ?                 │
// └───────────────────────────────────┘
// [Operador de encadenamiento opcional]
// - Detecta Null
// - Detecta undefined
//
// Mis Notas Personales:
// - Evita que me salte un error que detenga todo el Programa
// - Convierte el Error en "undefined"
const usuario1 = {
  nombre: "Ana",
  direccion: {
    ciudad: "Madrid",
  },
};

console.log(usuario1?.direccion?.ciudad); // Imprime: "Madrid"
console.log(usuario1?.contacto?.telefono); // Imprime: undefined (no genera error)

// - si existe ya no lo cambio
// - si la izquierda en null o undefined le asignare esta
// - rsm: le asigno el siguiente valor porque es nulo o undefined

const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

// ┌───────────────────────────────────┐┌───────────────────────────────────┐
// │                ??                 ││                 ?                 │
// └───────────────────────────────────┘└───────────────────────────────────┘

const foo = { someFooProp: "hola" };

console.log(foo.someFooProp?.toUpperCase() ?? "no disponible"); // "hola"
console.log(foo.someBarProp?.toUpperCase() ?? "no disponible"); // "no disponible"

const customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city

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
