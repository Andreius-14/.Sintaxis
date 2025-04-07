//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                BASICO                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

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
//┃            Array Simbolo              ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

int[] numeros = { 10, 20, 30, 40, 50 };

Console.WriteLine(numeros[^1]); // Imprime: 50 (último elemento)

Console.WriteLine(numeros[^2]); // Imprime: 40 (penúltimo elemento)

Console.WriteLine(numeros[^3]); // Imprime: 30

// ┌────────────────────────
// │  => C# 08: Rangos Array
// └────────────────────────
// --> Se asema a Spread
int[] numeros = { 1, 2, 3, 4, 5 };
int[] subarreglo = numeros[1..4];
int[] numeros = { 10, 20, 30, 40, 50 };

// a.. es equivalente a a..^0 (Hasta el final)
int[] subarreglo1 = numeros[2..]; // { 30, 40, 50 }

// ..b es equivalente a 0..b (Desde el inicio)
int[] subarreglo2 = numeros[..3]; // { 10, 20, 30 }

// .. es equivalente a 0..^0 (Todo el rango)
int[] subarreglo3 = numeros[..]; // { 10, 20, 30, 40, 50 }
