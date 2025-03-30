// Importamos el namespace del otro archivo
using System;
using Productos;

class Program
{
    static void Main(string[] args)
    {
        // Creamos una instancia de Telefono
        Telefono celular = new Telefono();
        celular.Marca = "Samsung";
        celular.Modelo = "Galaxy S23";

        celular.Llamar(); // Salida: Llamando desde Samsung Galaxy S23
    }
}
