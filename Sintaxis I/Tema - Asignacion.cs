// ═════════════════════════════════════
//          Operadores Simbolos
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

// ═════════════════════════════════════
//        Operadores Especiales
// ═════════════════════════════════════


// ┌───────────────────────────────────┐
// │            Ternario               │
// └───────────────────────────────────┘
int edad = 20;
string mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
Console.WriteLine(mensaje); // Imprime: Mayor de edad

bool estaLloviendo = true;
Console.WriteLine(estaLloviendo ? "Lleva un paraguas" : "Disfruta del sol");

// ┌───────────────────────────────────┐
// │          Deconstruccion           │
// └───────────────────────────────────┘

var persona1 = (Nombre: "Ana", Edad: 25);
var persona2 = (Nombre: "Luis", Edad: 30, Altura: 1.78);

// [Tuplas] [Usar var simplifica]
(string nombre1, int edad1) = persona1;
(string nombre2, _, double altura2) = persona2;
(string nombre3, int edad3) = ("María", 28);

Console.WriteLine($"Nombre: {nombre1} Edad: {edad1}");
Console.WriteLine($"Nombre: {nombre2}, Altura: {altura2}");
Console.WriteLine($"Nombre: {nombre3}, Edad: {edad3}");

public class Punto
{
    public int X { get; }
    public int Y { get; }

    public Punto(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void Deconstruct(out int x, out int y)
    {
        x = X;
        y = Y;
    }
}

/*var punto = new Punto(3, 4);*/
/*(var x, var y) = punto;*/
/*Console.WriteLine($"X: {x}, Y: {y}");*/
