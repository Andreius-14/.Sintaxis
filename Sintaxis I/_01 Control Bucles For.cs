// ┌───────────────────────────────────┐
// │              BASICO               │
// └───────────────────────────────────┘
for (int i = 0; i < 5; i++)
{
    Console.WriteLine("Clásico: " + i);
}

for (int i = 5; i > 0; i--)
{
    Console.WriteLine("Descendente: " + i);
}

// ┌───────────────────────────────────┐
// │               MEDIO               │
// └───────────────────────────────────┘
for (int i = 0; i <= 10; i += 2)
{
    Console.WriteLine("Paso de 2: " + i);
}

// 4. For con múltiples variables
for (int i = 0, j = 10; i < j; i++, j--)
{
    Console.WriteLine($"i = {i}, j = {j}");
}

// ┌───────────────────────────────────┐
// │             AVANZADO              │
// └───────────────────────────────────┘

// 5. For anidado (doble bucle)
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 2; j++)
    {
        Console.WriteLine($"Anidado: i={i}, j={j}");
    }
}

// 6. For con condiciones complejas
for (int i = 0; i < 10 && i != 5; i++)
{
    Console.WriteLine("Condición compleja: " + i);
}

// ┌───────────────────────────────────┐
// │              FOREACH              │
// └───────────────────────────────────┘

// [Array]
string[] frutas = { "Manzana", "Banana", "Uva" };

List<int> numeros = new List<int> { 10, 20, 30 };

Dictionary<string, int> edades = new Dictionary<string, int>() { { "Ana", 25 }, { "Luis", 30 } };

foreach (string fruta in frutas)
    Console.WriteLine(fruta);

foreach (var numero in numeros)
    Console.WriteLine(numero * 2); // Multiplica cada número por 2

foreach (KeyValuePair<string, int> entrada in edades)
    Console.WriteLine($"{entrada.Key}: {entrada.Value} años");
