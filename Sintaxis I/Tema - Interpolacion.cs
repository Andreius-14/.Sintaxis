// ┌───────────────────────────────────┐
// │          Interpolacion            │
// └───────────────────────────────────┘
Console.WriteLine("Signed integral types:");

Console.WriteLine($"sbyte  : {sbyte.MinValue} to {sbyte.MaxValue}");
Console.WriteLine($"short  : {short.MinValue} to {short.MaxValue}");
Console.WriteLine($"int    : {int.MinValue} to {int.MaxValue}");
Console.WriteLine($"long   : {long.MinValue} to {long.MaxValue}");

// ┌───────────────────────────────────┐
// │    Interpolacion - Multilinea     │
// └───────────────────────────────────┘
string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");

// ┌───────────────────────────────────┐
// │     Interpolacion - Ordenada      │
// └───────────────────────────────────┘

string first = "Hello";
string second = "World";
Console.WriteLine("{1} {0}!", first, second);
Console.WriteLine("{0} {0} {0}!", first, second);
