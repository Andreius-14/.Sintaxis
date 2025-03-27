// 1. For clásico (con índice)
for (int i = 0; i < 5; i++)
{
    Console.WriteLine("Clásico: " + i);
}

// 2. For descendente
for (int i = 5; i > 0; i--)
{
    Console.WriteLine("Descendente: " + i);
}

// 3. For con paso diferente (de 2 en 2)
for (int i = 0; i <= 10; i += 2)
{
    Console.WriteLine("Paso de 2: " + i);
}

// 4. For con múltiples variables
for (int i = 0, j = 10; i < j; i++, j--)
{
    Console.WriteLine($"i = {i}, j = {j}");
}

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
