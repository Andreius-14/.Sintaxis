// Clase con diferentes modificadores de acceso
public class MIClase
{
    public int campoPublico; // Accesible desde cualquier lugar
    private int campoPrivado; // Solo accesible desde MIClase
    protected int campoProtegido; // Accesible desde MIClase y sus clases derivadas

    public void MetodoPublico() { } // Accesible desde cualquier lugar

    private void MetodoPrivado() { } // Solo accesible desde MIClase

    protected void MetodoProtegido() { } // Accesible desde MIClase y sus clases derivadas
}

// Ejemplo de uso de modificadores de acceso
public class MainClass
{
    public static void Main(string[] args)
    {
        MIClase miClase = new MIClase();

        // Acceso a campo público
        miClase.campoPublico = 10;

        // Error: no se puede acceder a campo privado desde otra clase
        // miClase.campoPrivado = 11;

        // Error: no se puede acceder a método privado desde otra clase
        // miClase.MetodoPrivado();
    }
}
