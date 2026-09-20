//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                BASICO                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
List<int> numeros = new List<int>();

numeros.Add(10);
numeros.Add(20);
numeros.Add(30);

Console.WriteLine($"Primer número: {numeros[0]}");
Console.WriteLine($"Tamaño de la lista: {numeros.Count}");

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃              INSTANCIA                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

class Estudiante
{
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public Estudiante(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    public override string ToString()
    {
        return $"{Nombre}, {Edad} años";
    }
}

public class Inmueble
{
    public string Nombre { get; set; }

    public Inmueble(string nombre)
    {
        Nombre = nombre;
    }

    public void Registrar()
    {
        Console.WriteLine($"Registrando inmueble: {Nombre}");
    }
}

class Principal
{
    static void Main()
    {
        // Crear una lista de estudiantes
        List<Estudiante> estudiantes = new List<Estudiante>
        {
            new Estudiante("Ana", 20),
            new Estudiante("Luis", 22),
            new Estudiante("María", 19),
            new Estudiante("Pedro", 21),
        };

        List<Inmueble> ListaCasas = new List<Inmueble>();
        ListaCasas.Add(new Inmueble("Obj1"));
        ListaCasas.Add(new Inmueble("Obj2"));
        ListaCasas.Add(new Inmueble("Obj3"));
        ListaCasas.Add(new Inmueble("Obj4"));
        ListaCasas.Add(new Inmueble("Obj5"));
        ListaCasas.Add(new Inmueble("Obj6"));

        foreach (Inmueble item in ListaCasas)
        {
            item.Registrar();
        }
    }
}
