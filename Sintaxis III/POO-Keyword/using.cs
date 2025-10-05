// Podemos Importar otros Archivos no por su Nombre de Archivo sino el Nombre del namespace

using System; // Importa el namespace System para usar Console.WriteLine

class Program
{
    static void Main()
    {
        Console.WriteLine("Hola, mundo!"); // No hace falta escribir System.Console.WriteLine
    }
}

// 2. Declaraciones
// ____________________
// Se usa para manejar recursos (como archivos o conexiones) de forma automática.
// Cierra y libera recursos cuando termina el bloque.

using System;
using System.IO;

class Program
{
    static void Main()
    {
        using (StreamWriter escritor = new StreamWriter("archivo.txt"))
        {
            escritor.WriteLine("Hola, este es un archivo de texto.");
        } // Aquí el archivo se cierra automáticamente
    }
}


// 3. Renombrar
// ____________________
using IO = System.IO; // Alias para System.IO

class Program
{
    static void Main()
    {
        IO.StreamWriter escritor = new IO.StreamWriter("archivo.txt");
        escritor.WriteLine("Texto guardado.");
        escritor.Close();
    }
}

// ____________________
// 4. using con static
// ____________________
using static System.Console; // Importa métodos estáticos de Console

class Program
{
    static void Main()
    {
        WriteLine("¡Hola sin escribir Console!"); // No hace falta Console.WriteLine
    }
}

