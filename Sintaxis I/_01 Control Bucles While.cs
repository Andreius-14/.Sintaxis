// ┌───────────────────────────────────┐
// │              BASICO               │
// └───────────────────────────────────┘
int contador = 0;
while (contador < 3) // Verifica primero
{
    Console.WriteLine($"Iteración: {contador}");
    contador++;
}

// ┌───────────────────────────────────┐
// │              DO WHILE             │
// └───────────────────────────────────┘
int numero;
do // Ejecuta al menos una vez
{
    Console.Write("Ingresa un número positivo: ");
    numero = int.Parse(Console.ReadLine());
} while (numero <= 0);
Console.WriteLine($"Correcto: {numero} > 0");

// ┌───────────────────────────────────┐
// │              ERROR                │
// └───────────────────────────────────┘
int i = 0;
while (true) // Bucle "infinito" controlado
{
    if (i >= 3)
        break; // Salida forzada
    Console.WriteLine($"i = {i}");
    i++;
}
