using System;

class Program
{
    // Función recursiva para calcular el factorial
    static int Factorial(int n)
    {
        if (n == 0)
            return 1;
        else
            return n * Factorial(n - 1);
    }

    void ContarAtras(int n)
    {
        if (n == 0)
        {
            Console.WriteLine("¡Despegue!");
            return;
        }

        Console.WriteLine(n);
        ContarAtras(n - 1);
    }

    static void Main(string[] args)
    {
        Console.Write("Ingresa un número: ");
        int num = int.Parse(Console.ReadLine());

        int resultado = Factorial(num);
        Console.WriteLine("El factorial de " + num + " es: " + resultado);

        ContarAtras(5);
    }
}
