/*
 * Debes usar async/await cuando tengas una tarea que tome tiempo considerable y debas esperar a que termine.
 *
 */


using System;
using System.Threading.Tasks;

async Task WaitExampleAsync()
{
    await Task.Delay(1000); // Waits for 1 second without blocking the thread
    Console.WriteLine("Finished waiting asynchronously!");
}

static async Task principal()
{
    Console.WriteLine("Inicio del programa");
    string result = await DoWorkAsync();
    Console.WriteLine(result);
    Console.WriteLine("Fin del programa");
}

static async Task<string> DoWorkAsync()
{
    Console.WriteLine("Comensando Tarea");
    for (int i = 0; i < 10; i++)
    {
        Console.WriteLine("Tarea", i);
    }

    Console.WriteLine("Tarea completada!");
    return "Trabajo terminado";
}

principal();
