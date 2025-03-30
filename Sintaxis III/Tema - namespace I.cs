// Namespace Productos
// Lo Importante no es el Nombre del Archivo sino El nombre del namespace
namespace Productos
{
    public class Telefono
    {
        public string Marca;
        public string Modelo;

        public void Llamar()
        {
            Console.WriteLine("Llamando desde " + Marca + " " + Modelo);
        }
    }
}
