/*
 * Encapsulamiento:
 * ----------------
 * Una manera segura de Acceder a las Variables, Usando Function para lograr acceder
 *
 */

using System;

class Person
{
    // Encapsulamiento Basico
    private string name;
    public string Name
    {
        get { return name; } // [Moderno]   get => name;
        set { name = value; } // [Moderno]   set => name = value;
    }

    // Encapsulamiento Basico (Paremetros Rigurosos)
    private string apellido;
    public string Apellido
    {
        get { return name; }
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("El nombre no puede estar vacío.");
            name = value;
        }
    }

    // Encapsulamiento Minimalista (Recomendado)
    public string Nombre { get; set; }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             RECOMENDADO               ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


class Person
{
    // CAMPOS
    private readonly string id;
    public string Name { get; private set; } // Solo la clase puede modificar el nombre
    public int Age { get; set; } = 18; // Propiedad autoimplementada con valor por defecto

    // CONSTRUCTOR
    public Person(string id, string name)
    {
        // PARAMETROS
        if (string.IsNullOrWhiteSpace(id))
            throw new ArgumentException("El ID no puede estar vacío.");
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("El nombre no puede estar vacío.");

        this.id = id;
        Name = name;
    }

    public string Id => id; // Propiedad de solo lectura con expresión corporal
}

class Program
{
    static void Main()
    {
        Person person = new("12345", "Liam");
        Console.WriteLine($"ID: {person.Id}, Nombre: {person.Name}, Edad: {person.Age}");
        person.Age = 25;
        // person.Name = "Anna"; // Esto generaría un error de compilación
        Console.WriteLine($"ID: {person.Id}, Nombre: {person.Name}, Edad: {person.Age}");
    }
}
