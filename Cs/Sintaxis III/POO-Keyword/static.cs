// Class Static
// ------------
// - Se declaran con la palabra clave static.
// - No se pueden instanciar (no se puede crear un objeto de ellas).
// - Solo pueden contener miembros estáticos (métodos, propiedades, campos, etc.).
// - Se usan comúnmente para agrupar funcionalidades relacionadas, como utilidades o métodos de ayuda.



//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                CAMPOS                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

public static class Globals
{
    public static int VariableInt { get; set; } = 42;
    public static string VariableString { get; set; } = "Hello, world!";
}
// -> Solo existe una copia del campo en la memoria, independientemente de instancias

Console.WriteLine("=> Valores Predeterminados");
Console.WriteLine(Globals.VariableInt);
Console.WriteLine(Globals.VariableString);

Globals.VariableInt = 1000;
Globals.VariableString = "numeros";

Console.WriteLine("=> Valores Actualizados");
Console.WriteLine(Globals.VariableInt);
Console.WriteLine(Globals.VariableString);


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃              FUNCIONES                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// -> Se puede Acceder sin Crear instancias


public class Utils
{
    public static string Saludar(string nombre) => $"Hola, {nombre}!";
}

class Program
{
    // Función que devuelve un saludo
    static string Saludar(string nombre)
    {
        return "Hola, " + nombre;
    }

    static int Sumar(int a, int b)
    {
        return a + b;
    }

    static void Main() //void: Sigfinica que la funcion no lanza un return
    {
        //Funcion Static [Hemanas]
        string mensaje = Saludar("Carlos");
        Console.WriteLine(mensaje);

        int resultado = Sumar(5, 3);
        Console.WriteLine("La suma es: " + resultado);

        //Funcion Static [Prima]
        Console.WriteLine(Utils.Saludar("Juan"));
    }
}

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                CLASS                  ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// => Las Clases Static - Solo contienen Funciones Static

public static class Utilidades
{
    public static void Saludar(string nombre)
    {
        Console.WriteLine($"Hola, {nombre}");
    }
}

Utilidades.Saludar("Carlos"); // No se necesita `new`
