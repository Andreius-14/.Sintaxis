/*
 * Polimorfismo:
 * ----------------
 * - Sobreescribir Funciones Del Padre Heredado
 * - Sobrecargar funciones ya existentes con parametros Diferentes
 * - Sobrecargar Constructores
 *
 */


using System;

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃       SOBRECARGA - METODOS            ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// Top-level statements

namespace Matemica
{
    class Calculator
    {
        // Sobrecarga del método Add
        public int Add(int a, int b)
        {
            return a + b;
        }

        public double Add(double a, double b)
        {
            return a + b;
        }

        public int Add(int a, int b, int c)
        {
            return a + b + c;
        }
    }

    class Program
    {
        static void Main()
        {
            Calculator calc = new();
            Console.WriteLine(calc.Add(5, 3)); // Llama a Add(int, int)
            Console.WriteLine(calc.Add(5.5, 3.3)); // Llama a Add(double, double)
            Console.WriteLine(calc.Add(5, 3, 2)); // Llama a Add(int, int, int)
        }
    }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃       SOBRECARGA - CONSTRUCTOR        ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

namespace AgenciaInmobiliaria
{
    public class Casa : IInmueble
    {
        public Casa(string tipo, double precio)
        {
            TipoInmueble = tipo;
            Precio = precio;
        }

        public Casa(string tipo)
        {
            TipoInmueble = tipo;
        }

        public string TipoInmueble { get; }
        public double Precio { get; }
    }

    public interface IInmueble
    {
        string TipoInmueble { get; }
        double Precio { get; }
    }

    class Program
    {
        static void Main()
        {
            Casa miCasa = new("Apartamento", 120000.50);
            Console.WriteLine($"Tipo: {miCasa.TipoInmueble}, Precio: {miCasa.Precio}");
        }
    }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃    SOBRECARGAR - Metodos Heredados    ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

namespace SobrecargaHeredando
{
    class Animal // Base class (parent)
    {
        public virtual void animalSound()
        {
            Console.WriteLine("The animal makes a sound");
        }
    }

    class Pig : Animal // Derived class (child)
    {
        public override void animalSound()
        {
            Console.WriteLine("The pig says: wee wee");
        }
    }

    class Dog : Animal // Derived class (child)
    {
        public override void animalSound()
        {
            Console.WriteLine("The dog says: bow wow");
        }
    }

    class Program
    {
        static void Main()
        {
            Pig myPig = new();
            Dog myDog = new();
            myPig.animalSound();
            myDog.animalSound();
        }
    }
}

namespace SobrecargaInterfaces
{
    interface IAnimal
    {
        void MakeSound();
    }

    class Pig : IAnimal
    {
        public void MakeSound()
        {
            Console.WriteLine("The pig says: wee wee");
        }
    }

    class Dog : IAnimal
    {
        public void MakeSound()
        {
            Console.WriteLine("The dog says: bow wow");
        }
    }
}
