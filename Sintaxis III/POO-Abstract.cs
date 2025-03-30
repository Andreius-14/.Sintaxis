/*
 *
 * El Polimorfismo:
 * __________________
 * Es el Proceso por el Cual Elegimos el Objeto a Representar
 * Es el Proceso por el Cual Elegimos las Caracteristicas importantes del Objet Representado
 *
 */


Pig myPig = new Pig(); // Create a Pig object
myPig.animalSound(); // Call the abstract method
myPig.sleep(); // Call the regular method

namespace Abstraccion
{
    // Abstract class
    abstract class Animal
    {
        public abstract void animalSound(); // un método abstracto que las clases derivadas deben implementar

        public void sleep()
        {
            Console.WriteLine("Zzz");
        }
    }

    class Pig : Animal
    {
        public override void animalSound() // Implementa (sobrescribe) el método abstracto animalSound()
        {
            Console.WriteLine("The pig says: wee wee");
        }
    }
}
