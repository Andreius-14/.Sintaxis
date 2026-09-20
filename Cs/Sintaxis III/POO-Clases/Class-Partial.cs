/*
 * Class - partial:
 * ----------------
 *  - Imagina tener tu clase En diferente archivos
 *  - Se ejecuta como uno Solo
 *  - Estructura mas Limpia
 * */

// Archivo1.cs
public partial class Persona
{
    public string Nombre { get; set; }

    public void Saludar()
    {
        Console.WriteLine($"Hola, soy {Nombre}");
    }
}

// Archivo2.cs
public partial class Persona
{
    public int Edad { get; set; }

    public void MostrarEdad()
    {
        Console.WriteLine($"Tengo {Edad} años");
    }
}

// Programa principal
class Program
{
    static void Main()
    {
        Persona persona = new Persona { Nombre = "Juan", Edad = 30 };
        persona.Saludar(); // Salida: Hola, soy Juan
        persona.MostrarEdad(); // Salida: Tengo 30 años
    }
}
