// No necesita spread pues ya se le puede pasar una array a una funcion

// ┌────────────────────────
// │  => ARRAY TO FUNCTION
// └────────────────────────
int Sumar(params int[] numeros)
{
    int suma = 0;
    foreach (int numero in numeros)
    {
        suma += numero;
    }
    Console.WriteLine(suma);
    return suma;
}

// Uso:
int resultado1 = Sumar(1, 2, 3); // resultado1 = 6
int resultado2 = Sumar(5, 10, 15, 20); // resultado2 = 50

Console.WriteLine("HolaMundo");

// ┌────────────────────────
// │  => C# 12: expresiones de colección [ARRAY]
// └────────────────────────

int[] numeros1 = [1, 2, 3];
int[] numeros2 = [4, 5, 6];

// Combinar arrays usando el operador spread '..'
int[] todosLosNumeros = [.. numeros1, .. numeros2];

// Imprimir el array combinado
Console.WriteLine(string.Join(", ", todosLosNumeros)); // Salida: 1, 2, 3, 4, 5, 6

// ┌────────────────────────
// │  => C# 12: expresiones de colección [LIST]
// └────────────────────────

List<string> frutas1 = ["manzana", "banana"];
List<string> frutas2 = ["naranja", "uva"];

// Combinar listas usando el operador spread '..'
List<string> todasLasFrutas = [.. frutas1, .. frutas2, "kiwi"];

// Imprimir la lista combinada
Console.WriteLine(string.Join(", ", todasLasFrutas)); // Salida: manzana, banana, naranja, uva, kiwi
