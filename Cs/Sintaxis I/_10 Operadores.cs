// ═════════════════════════════════════
//                Operadores
// ═════════════════════════════════════
// ┌───────────────────────────────────┐
// │         Aritméticos               │
// └───────────────────────────────────┘
int a = 10,
    b = 3;

var Suma = a + b; // 13
var Resta = a - b; // 7
var Multiplicación = a * b; // 30
var División = a / b; // 3 (truncado)
var Módulo = a % b; // 1 (resto)

Console.WriteLine(10 / 3); // 3 (división entera)
Console.WriteLine(10 / 3.0); // 3.333... (división flotante)

// ┌───────────────────────────────────┐
// │         Asignación                │
// └───────────────────────────────────┘
int valor = 10;

valor += 5; // valor = 15 (10 + 5)
valor -= 3; // valor = 12 (15 - 3)
valor *= 2; // valor = 24 (12 * 2)
valor /= 4; // valor = 6  (24 / 4)
valor %= 5; // valor = 1  (6 % 5)

log($"Resultado: {valor} "); // Resultado: 1

// ┌───────────────────────────────────┐
// │          Lógicos                  │
// └───────────────────────────────────┘
// Y lógico (&&)
bool and = (a > 0 && b < 5); /*true si a > 0 Y b < 5*/
bool or = (a < 0 || b > 0); // true si a < 0 O b > 0
bool not = !(a == 10); // false si a no es igual a 10 (en este caso, a es 5)
bool xor = true ^ false; //Solo Uno debe Ser True

// ┌───────────────────────────────────┐
// │           Relacionales            │
// └───────────────────────────────────┘


int a = 10;
int b = 20;

// == (igual a)
if (a == b)
    Console.WriteLine("a es igual a b");
else
    Console.WriteLine("a no es igual a b");

// != (diferente de)
if (a != b)
    Console.WriteLine("a es diferente de b");

// > (mayor que)
if (b > a)
    Console.WriteLine("b es mayor que a");

// < (menor que)
if (a < b)
    Console.WriteLine("a es menor que b");

// >= (mayor o igual que)
if (b >= 20)
    Console.WriteLine("b es mayor o igual que 20");

// <= (menor o igual que)
if (a <= 10)
    Console.WriteLine("a es menor o igual que 10");

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃       Incremento - Decremento         ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
int x = 5;
int y = x++; // y = 5 (asigna primero, luego incrementa)
log($"x: {x}, y: {y}"); // x: 6, y: 5

int z = ++x; // z = 7 (incrementa primero, luego asigna)
log($"x: {x}, z: {z}"); // x: 7, z: 7

// ┌───────────────────────────────────┐
// │            Ternario               │
// └───────────────────────────────────┘
int edad = 20;
string mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
Console.WriteLine(mensaje); // Imprime: Mayor de edad

bool estaLloviendo = true;
Console.WriteLine(estaLloviendo ? "Lleva un paraguas" : "Disfruta del sol");
