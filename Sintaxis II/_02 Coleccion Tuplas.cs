//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                 BASICO                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

var persona = ("Juan", 25); // Tupla con string e int
var estudiante = (Nombre: "Ana", Edad: 20, Aprobado: true);
var producto = ("Laptop", 1200.99m);

Console.WriteLine($"Nombre: {persona.Item1}, Edad: {persona.Item2}");
Console.WriteLine($"{estudiante.Nombre} tiene {estudiante.Edad} años");

// Desestructuración
(string nombre, decimal precio) = producto; // Desestructuración
Console.WriteLine($"{nombre} cuesta {precio:C}"); // Salida: Laptop cuesta $1,200.99

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                 Medio                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

var personas = new List<(string Nombre, int Edad)> { ("Luis", 25), ("María", 30), ("Pedro", 22) };

var mayores = personas.Where(p => p.Edad >= 25).Select(p => (p.Nombre, p.Edad));
foreach (var p in mayores)
{
    Console.WriteLine($"{p.Nombre} - {p.Edad} años");
}
