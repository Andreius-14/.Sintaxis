using System.Text;

string nombre = "Juan";
string saludo = "Hola, " + nombre + "!";
Console.WriteLine(saludo); // Hola, Juan!

var sb = new StringBuilder();
sb.Append("Hola");
sb.Append(", ");
sb.Append("¿cómo estás?");
Console.WriteLine(sb.ToString()); // Hola, ¿cómo estás?

/*[Interpolacion]*/

string nombre1 = "Ana";
string saludo1 = $"Hola, {nombre1}!";
Console.WriteLine(saludo1); // Hola, Ana!
