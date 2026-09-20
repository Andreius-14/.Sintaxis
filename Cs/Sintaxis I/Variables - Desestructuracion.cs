// ┌───────────────────────────────────┐
// │          Deconstruccion           │
// └───────────────────────────────────┘

var persona1 = (Nombre: "Ana", Edad: 25);
var persona2 = (Nombre: "Luis", Edad: 30, Altura: 1.78);

// [Tuplas] [Usar var simplifica]
(string nombre1, int edad1) = persona1;
(string nombre2, _, double altura2) = persona2;
(string nombre3, int edad3) = ("María", 28);

Console.WriteLine($"Nombre: {nombre1} Edad: {edad1}");
Console.WriteLine($"Nombre: {nombre2}, Altura: {altura2}");
Console.WriteLine($"Nombre: {nombre3}, Edad: {edad3}");

// ┌────────────────────────
// │  => TUPLAS
// └────────────────────────

(int x, int y) = (10, 20); // Desestructuración de una tupla

Console.WriteLine($"x: {x}, y: {y}"); // Salida: x: 10, y: 20

Persona persona = new Persona { Nombre = "Juan", Edad = 30 };
var (nombre, edad) = (persona.Nombre, persona.Edad); // Desestructuración de un objeto
Console.WriteLine($"Nombre: {nombre}, Edad: {edad}");

public class Persona
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
}
