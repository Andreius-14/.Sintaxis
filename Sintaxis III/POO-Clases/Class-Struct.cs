// Igual de Clases para para Datos Estructurados

// uso
Punto punto = new Punto(3, 5);
punto.ImprimirCoordenadas();

struct Punto
{
    public int X;
    public int Y;

    public Punto(int x, int y)
    {
        X = x;
        Y = y;
    }

    public void ImprimirCoordenadas()
    {
        Console.WriteLine($"Coordenadas: ({X}, {Y})");
    }
}
