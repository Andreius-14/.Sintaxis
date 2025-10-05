Dictionary<string, int> myDictionary = new Dictionary<string, int>
{
    { "John Doe", 30 },
    { "Jane Doe", 25 },
};

// EL diccionario ahora contiene los siguientes elementos:
// KEY      | Value
// ---------|---------
// John Doe | 30
// Jane Doe | 25
//

Dictionary<string, int> edades = new Dictionary<string, int>();

// Agregar elementos
edades.Add("Ana", 25);
edades.Add("Luis", 30);
edades.Add("María", 28);

var cursos = new Dictionary<string, List<Estudiante>>
{
    {
        "Matemáticas",
        new List<Estudiante> { new Estudiante("Ana", 20), new Estudiante("Luis", 22) }
    },
    {
        "Historia",
        new List<Estudiante> { new Estudiante("María", 19), new Estudiante("Pedro", 21) }
    },
};
