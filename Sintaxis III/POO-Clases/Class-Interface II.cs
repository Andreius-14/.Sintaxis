// Definición de una interfaz llamada IEmployee.
interface IEmployee
{
    // Propiedad de lectura/escritura para el nombre del empleado.
    string Name { get; set; }

    // Propiedad de solo lectura para un contador.
    int Counter { get; }
}

// Definición de una clase llamada Employee que implementa la interfaz IEmployee.
public class Employee : IEmployee
{
    // Campo estático para contar el número de empleados.
    public static int numberOfEmployees;

    // Campo privado para almacenar el nombre del empleado.
    private string _name;

    // Implementación de la propiedad Name de la interfaz.
    public string Name // read-write instance property
    {
        get => _name;
        set => _name = value;
    }

    // Campo privado para almacenar el contador.
    private int _counter;

    // Implementación de la propiedad Counter de la interfaz.
    public int Counter // read-only instance property
    {
        get => _counter;
    }

    // Constructor de la clase Employee.
    public Employee() => _counter = ++numberOfEmployees;
}
