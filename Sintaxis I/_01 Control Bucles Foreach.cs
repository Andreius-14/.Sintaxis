// [Array]
string[] frutas = { "Manzana", "Banana", "Uva" };

foreach (string fruta in frutas)
{
    Console.WriteLine(fruta);
}

// [Lista]
List<int> numeros = new List<int> { 10, 20, 30 };

foreach (var numero in numeros)
{
    Console.WriteLine(numero * 2); // Multiplica cada número por 2
}

// [DICCIONARIO]
Dictionary<string, int> edades = new Dictionary<string, int>() { { "Ana", 25 }, { "Luis", 30 } };

foreach (KeyValuePair<string, int> entrada in edades)
{
    Console.WriteLine($"{entrada.Key}: {entrada.Value} años");
}
