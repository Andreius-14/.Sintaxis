// Primer bloque
int[] myArray1 = new int[] { 1, 2, 3 };
int[] myArray2 = new[] { 1, 2, 3 };
int[] myArray3 = { 1, 2, 3 };
int[] myArray4 = [1, 2, 3];

// Segundo bloque
string[] cars = new string[4];
string[] cars = new string[4] { "Volvo", "BMW", "Ford", "Mazda" };
string[] cars = new string[] { "Volvo", "BMW", "Ford", "Mazda" };
string[] cars = { "Volvo", "BMW", "Ford", "Mazda" };

// Tercer bloque
string[] fraudulentOrderIDs = new string[3];
fraudulentOrderIDs[0] = "A123";
fraudulentOrderIDs[1] = "B456";
fraudulentOrderIDs[2] = "C789";

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃            Array Objetos              ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// Antes
Person[] people =
{
    new Person("David", "Martinez", "Pérez"),
    new Person("Juan", "Pérez", "Martinez"),
    new Person("Antonio", "Martin", "Mora"),
    // ...
};

// Después
Person[] people =
[
    new("David", "Martinez", "Pérez"),
    new("Juan", "Pérez", "Martinez"),
    new("Antonio", "Martin", "Mora"),
    // ...
];

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃            Array Simbolo              ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

int[] numeros = { 10, 20, 30, 40, 50 };

Console.WriteLine(numeros[^1]); // Imprime: 50 (último elemento)

Console.WriteLine(numeros[^2]); // Imprime: 40 (penúltimo elemento)

Console.WriteLine(numeros[^3]); // Imprime: 30
