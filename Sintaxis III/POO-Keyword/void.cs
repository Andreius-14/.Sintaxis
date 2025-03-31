// => Metodos
using System;

// Void => Con contiene un Return

class Program
{
    static void MostrarMensaje()
    {
        Console.WriteLine("¡Hola, esto es un método void!");
    }

    static void Saludar(string nombre)
    {
        Console.WriteLine($"Hola, {nombre}!");
    }

    static void Main()
    {
        // => Metodos
        MostrarMensaje();
        Saludar("Carlos");

        // => Instancia
        Persona p = new Persona { Nombre = "Ana" };
        p.Presentarse(); // Output: Hola, mi nombre es Ana

        // => Clases Static
        Utils.MostrarInfo(); // Llamada sin instanciar
    }
}

class Persona
{
    public string Nombre;

    public void Presentarse()
    {
        Console.WriteLine($"Hola, mi nombre es {Nombre}");
    }
}

public static class Utils
{
    public static void MostrarInfo()
    {
        Console.WriteLine("Método estático en una clase estática.");
    }
}
