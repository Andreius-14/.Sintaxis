// => Antiguo - Error
class Car
{
    string model;
    string color;
    int year;

    static void Main(string[] args)
    {
        Car Ford = new Car();
        Ford.model = "Mustang";
        Ford.color = "red";
        Ford.year = 1969;

        Car Opel = new Car();
        Opel.model = "Astra";
        Opel.color = "white";
        Opel.year = 2005;

        Console.WriteLine(Ford.model);
        Console.WriteLine(Opel.model);
    }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                CLASES                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


// Clase Car con propiedades y constructor
public class Car
{
    public string Model { get; set; }
    public string Color { get; set; }
    public int Year { get; set; }

    public Car(string model, string color, int year)
    {
        Model = model;
        Color = color;
        Year = year;
    }

    public override string ToString()
    {
        return $"Modelo: {Model}, Color: {Color}, Año: {Year}";
    }
}

public class Program
{
    static void Main(string[] args)
    {
        // Crear instancias usando el constructor
        Car ford = new Car("Mustang", "red", 1969);
        Car opel = new Car("Astra", "white", 2005);

        // Mostrar información de los coches
        Console.WriteLine(ford.ToString());
        Console.WriteLine(opel.ToString());
    }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             NAMESPACE                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// => Acceso [Manera Incorrecta]
namespace MyNewApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string value = "Microsoft Learn";
            // Redundante (Recomendacion usar using)
            string reversedValue = MyNewApp.Utilities.Utility.Reverse(value);
            Console.WriteLine($"Secret message: {reversedValue}");
        }
    }
}

namespace MyNewApp.Utilities
{
    class Utility
    {
        public static string Reverse(string message)
        {
            char[] letters = message.ToCharArray();
            Array.Reverse(letters);
            return new string(letters);
        }
    }
}
