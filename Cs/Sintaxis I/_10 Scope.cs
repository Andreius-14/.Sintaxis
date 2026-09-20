// ┌───────────────────────────────────┐
// │              Scope                │
// └───────────────────────────────────┘
int x = 10; // Variable con alcance dentro del método Main

if (x > 5)
{
    int y = 20; // Variable con alcance dentro del bloque if
    Console.WriteLine($"Dentro del if: x = {x}, y = {y}"); // Accesible: x e y
}

// Console.WriteLine(y); // Error: 'y' no está en el alcance (está fuera del bloque if)

Console.WriteLine($"Fuera del if: x = {x}"); // Accesible: x

// ┌───────────────────────────────────┐
// │         Scope - Locales           │
// └───────────────────────────────────┘
for (int i = 0; i < 3; i++)
{
    Console.WriteLine(i); // Accesible dentro del bucle
}

// Console.WriteLine(i); // Error: 'i' no está en el alcance

// ┌───────────────────────────────────┐
// │         Scope - namespace         │
// └───────────────────────────────────┘

namespace MiNamespace
{
    public class Utilidades
    {
        public static void ImprimirMensaje(string mensaje)
        {
            Console.WriteLine(mensaje);
        }
    }
}

class General
{
    static void Main()
    {
        // Acceder a la clase Utilidades desde otro namespace
        MiNamespace.Utilidades.ImprimirMensaje("¡Hola desde el namespace!");
    }
}

// ┌───────────────────────────────────┐
// │          Scope - Class            │
// └───────────────────────────────────┘

class scopeClass
{
    // Campo a nivel de clase (alcance de clase)
    static int contador = 0;

    static void Main()
    {
        IncrementarContador();
        IncrementarContador();
        Console.WriteLine($"Valor del contador: {contador}"); // Imprime: 2
    }

    static void IncrementarContador()
    {
        contador++; // Accesible porque contador tiene alcance de clase
    }
}

// ┌───────────────────────────────────┐
// │         Scope - Instancia         │
// └───────────────────────────────────┘

class Persona
{
    // Campo a nivel de clase (alcance de instancia)
    public string nombre;

    public Persona(string nombre)
    {
        this.nombre = nombre; // 'this' se usa para distinguir el campo de la variable local
    }

    public void Saludar()
    {
        Console.WriteLine($"Hola, soy {nombre}"); // Accesible dentro de la clase
    }
}

class Program
{
    static void Main()
    {
        Persona persona1 = new Persona("Ana");
        Persona persona2 = new Persona("Luis");

        persona1.Saludar(); // Imprime: Hola, soy Ana
        persona2.Saludar(); // Imprime: Hola, soy Luis

        Console.WriteLine(persona1.nombre); // Accesible porque 'nombre' es public
    }
}
