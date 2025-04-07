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
