try
{
    int resultado = 10 / int.Parse("0"); // División por cero
}
catch (Exception ex) // Captura cualquier error
{
    Console.WriteLine($"Error: {ex.Message}");
}

// [try-catch con Múltiples Bloques catch]
try
{
    File.ReadAllText("archivo_inexistente.txt");
}
catch (FileNotFoundException ex)
{
    Console.WriteLine("¡Archivo no encontrado!: " + ex.Message);
}
catch (IOException ex) // Excepción más general de I/O
{
    Console.WriteLine("Error de E/S: " + ex.Message);
}
catch (Exception ex) // Cualquier otra excepción
{
    Console.WriteLine("Error inesperado: " + ex.Message);
}

// [try-catch-finally]
StreamReader reader = null;
try
{
    reader = new StreamReader("archivo.txt");
    Console.WriteLine(reader.ReadToEnd());
}
catch (Exception ex)
{
    Console.WriteLine("Error: " + ex.Message);
}
finally
{
    reader?.Close(); // Cierra el archivo incluso si hay error
}

// [try-finally] (sin catch)
// Útil cuando no necesitas manejar el error, pero sí asegurar la limpieza:

FileStream file = null;
try
{
    file = File.Open("datos.bin", FileMode.Open);
    // Trabajar con el archivo...
}
finally
{
    file?.Dispose(); // Libera recursos
}

// 5. Captura por Filtros (when)
// Ejecuta el catch solo si se cumple una condición:
try
{
    int num = int.Parse("abc"); // Formato incorrecto
}
catch (FormatException ex) when (ex.Message.Contains("abc"))
{
    Console.WriteLine("Error específico por formato 'abc'");
}
catch (FormatException ex)
{
    Console.WriteLine("Error de formato general");
}

// 6. Excepciones Personalizadas
// Lanza y captura tus propias excepciones:
/*class SaldoInsuficienteException : Exception*/
/*{*/
/*    public SaldoInsuficienteException(string message) : base(message) {}*/
/*}*/
/**/
/*try*/
/*{*/
/*    throw new SaldoInsuficienteException("Saldo negativo");*/
/*}*/
/*catch (SaldoInsuficienteException ex)*/
/*{*/
/*    Console.WriteLine(ex.Message); // "Saldo negativo"*/
/*}*/


// 7. throw Relanzar Excepciones
// Relanza una excepción capturada (para registrarla o limpiar antes de propagarla

try
{
    // Código que puede fallar...
}
catch (Exception ex)
{
    Console.WriteLine("Registro: " + ex.Message);
    throw; // Relanza la misma excepción
}
