int dia = 3;
string nombreDia;
//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                BASICO                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ 

switch (dia)
{
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    default:
        nombreDia = "Día no válido";
        break;
}

Console.WriteLine(nombreDia); // Salida: "Miércoles"


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃               C# 7.0                  ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ 

object valor = "Hola C#";
int edad = 25;

switch (valor)
{
    case int numero:
        Console.WriteLine($"Es un número: {numero}");
        break;
    case string texto when texto.Length > 5: // Condición adicional
        Console.WriteLine($"Texto largo: {texto}");
        break;
    case string texto:
        Console.WriteLine($"Texto: {texto}");
        break;
    default:
        Console.WriteLine("Tipo desconocido");
        break;
}

switch (edad)
{
    case < 18:
        Console.WriteLine("Menor de edad");
        break;
    case >= 18 and < 65:
        Console.WriteLine("Adulto");
        break;
    default:
        Console.WriteLine("Adulto mayor");
        break;
}


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃               C# 8.0                  ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ 

int numero = 2;
var punto = (x: 0, y: 4);

string resultado = numero switch
{
    1 => "Uno",
    2 => "Dos",
    3 => "Tres",
    _ => "Número desconocido" // Default
};

string ubicacion = punto switch
{
    (0, 0) => "Origen",
    (0, _) => "Eje Y", // '_' ignora el valor
    (_, 0) => "Eje X",
    _ => "Fuera de ejes"
};

Console.WriteLine(resultado); // Salida: "Dos"
Console.WriteLine(ubicacion); // Salida: "Eje Y"

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             ESPECIALES                ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ 

enum Estado { Activo, Inactivo, Pendiente }

Estado estado = Estado.Pendiente;
string mensaje = estado switch
{
    Estado.Activo => "✅ Activo",
    Estado.Inactivo => "⛔ Inactivo",
    Estado.Pendiente => "⌛ Pendiente",
    _ => "Estado inválido"
};

Console.WriteLine(mensaje); // Salida: "⌛ Pendiente"

string input = "admin";

string permisos = input switch
{
    "admin" => "Acceso total",
    "user" => "Acceso limitado",
    _ => "Sin acceso" // Default
};
