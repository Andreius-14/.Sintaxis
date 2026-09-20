//---------------------------------------------------------------
//                          BASICO
//---------------------------------------------------------------
// String
let nombre: string = "Juan";
let apellido: string = "Pérez";
let saludo: string = `Hola, ${nombre}`; // Template literal

// Number
let edad: number = 30;
let precio: number = 19.99;
let hexadecimal: number = 0xff; // 255 en decimal

// Boolean
let esActivo: boolean = true;
let tieneHijos: boolean = false;

// Array
let numeros: number[] = [1, 2, 3];
let frutas: Array<string> = ["manzana", "banana"]; // Sintaxis genérica

// Tuple
let persona: [string, number] = ["Juan", 30]; // Array con tipos fijos

//---------------------------------------------------------------
//                      ESPECIAL
//---------------------------------------------------------------

// Any (evitar cuando sea posible)
let variableDinamica: any = "puede ser cualquier tipo";
variableDinamica = 42;
variableDinamica = true;

// Null y Undefined
let n: null = null;
let u: undefined = undefined;

//---------------------------------------------------------------
//                      AVANZADO
//---------------------------------------------------------------
// Union types
let id: string | number;
id = "ABC123"; // válido
id = 123; // también válido

// Literal types
let direccion: "norte" | "sur" | "este" | "oeste";
direccion = "norte"; // Error tipográfico - TypeScript lo detectará
direccion = "norte"; // Correcto

//---------------------------------------------------------------
//                      POO
//---------------------------------------------------------------
// Never (para funciones que nunca terminan)
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// Void (generalmente para funciones que no retornan valor)
function mostrarMensaje(): void {
  console.log("Hola");
}

// Enum
enum Color {
  Rojo,
  Verde,
  Azul,
}
let colorFavorito: Color = Color.Verde;

// Interfaces
interface Usuario {
  nombre: string;
  edad?: number; // propiedad opcional
}

let usuario1: Usuario = { nombre: "Ana" };

// Type aliases
type Punto = {
  x: number;
  y: number;
};
let coordenada: Punto = { x: 10, y: 20 };
