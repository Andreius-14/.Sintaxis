using System;

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                 CODE                  ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// Top-level statements (para probar las clases)
Car myCar = new();
Console.WriteLine($"Brand: {myCar.brand}, Model: {myCar.modelName}");
myCar.honk();

//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             HERENCIAS                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

// Declaraciones de clases
class Vehicle // base class (parent)
{
    public string brand = "Ford"; // Vehicle field

    public void honk() // Vehicle method
    {
        Console.WriteLine("Tuut, tuut!!");
    }
}

class Car : Vehicle // derived class (child)
{
    public string modelName = "Mustang"; // Car field
}


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃                 TRUCO                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
// Si deseamos que una clase no se heredado
// añadiremos a el nombre => sealed class Vehicle{}
