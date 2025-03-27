// ═════════════════════════════════════
//                Operadores
// ═════════════════════════════════════


// ┌───────────────────────────────────┐
// │                ..                 │
// └───────────────────────────────────┘
int[] numbers = new[] { 0, 10, 20, 30, 40, 50 };
int amountToDrop = numbers.Length / 2;

int[] rightHalf = numbers[amountToDrop..];
Display(rightHalf); // output: 30 40 50

int[] leftHalf = numbers[..amountToDrop];
Display(leftHalf); // output: 0 10 20

int[] all = numbers[..];
Display(all); // output: 0 10 20 30 40 50

void Display<T>(IEnumerable<T> xs) => Console.WriteLine(string.Join(" ", xs));

// ┌───────────────────────────────────┐
// │                ?                  │
// └───────────────────────────────────┘
// Sin Valor Predeterminado Sera Null
// Declaramos un int nullable
int? numero = null;

Console.WriteLine(numero.HasValue); // Imprime: False (no tiene valor)
Console.WriteLine(numero); // Imprime: (nada, porque es null)

numero = 42;
Console.WriteLine(numero.HasValue); // Imprime: True (tiene valor)
Console.WriteLine(numero); // Imprime: 42

// ┌───────────────────────────────────┐
// │               ??                  │
// └───────────────────────────────────┘
// Si es Null , Selecciona Valor por Defecto

string nombre = null;
string resultado = nombre ?? "Respuesta Predeterminada";

Console.WriteLine($"Bienvenido, {resultado}"); // Imprime: Bienvenido, Invitado

// ┌───────────────────────────────────┐
// │            Ternario               │
// └───────────────────────────────────┘
int edad = 20;
string mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
Console.WriteLine(mensaje); // Imprime: Mayor de edad

bool estaLloviendo = true;
Console.WriteLine(estaLloviendo ? "Lleva un paraguas" : "Disfruta del sol");
