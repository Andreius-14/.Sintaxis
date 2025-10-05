// Namespace Productos
// Lo Importante no es el Nombre del Archivo sino El nombre del namespace


// Importamos el namespace del otro archivo

// => Archivo 1
using System;
using Productos;

class Program
{
    static void Main(string[] args)
    {
        // Creamos una instancia de Telefono
        Telefono celular = new Telefono();
        celular.Marca = "Samsung";
        celular.Modelo = "Galaxy S23";

        celular.Llamar(); // Salida: Llamando desde Samsung Galaxy S23
    }
}

// => Archivo 2
namespace Productos
{
    public class Telefono
    {
        public string Marca;
        public string Modelo;

        public void Llamar()
        {
            Console.WriteLine("Llamando desde " + Marca + " " + Modelo);
        }
    }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃     => Acceso con Using               ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


// => Archivo 1
namespace MyNewApp
{
    using MyNewApp.Utilities; // Simplifica el acceso a Utility

    class Program
    {
        static void Main(string[] args)
        {
            string value = "Microsoft Learn";
            string reversedValue = Utility.Reverse(value);
            Console.WriteLine($"Secret message: {reversedValue}");
        }
    }
}

// => Archivo 2
namespace MyNewApp.Utilities
{
    public static class Utility
    {
        public static string Reverse(string message)
        {
            if (string.IsNullOrEmpty(message))
                return message;
            char[] result = new char[message.Length];
            for (int i = 0; i < message.Length; i++)
            {
                result[i] = message[message.Length - 1 - i];
            }
            return new string(result);
        }
    }
}
