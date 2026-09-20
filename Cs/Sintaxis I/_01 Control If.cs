int edad = 20;
int nota = 7;
int numero = 10;
bool tienePermiso = true;

// 1. if simple
if (edad >= 18)
    Console.WriteLine("Es mayor de edad");

// 2. if + else
if (edad < 18)
    Console.WriteLine("Menor de edad");
else
    Console.WriteLine("Mayor de edad");

// 3. if + else if + else
if (nota >= 9)
{
    Console.WriteLine("Excelente");
}
else if (nota >= 6)
{
    Console.WriteLine("Aprobado");
}
else
{
    Console.WriteLine("Reprobado");
}

// 4. if anidado
if (numero > 0)
{
    if (numero % 2 == 0)
    {
        Console.WriteLine("Es positivo y par");
    }
}
