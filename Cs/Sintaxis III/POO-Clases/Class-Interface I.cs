
//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃             interface                 ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
interface IAnimal {
    void animalSound();
}

class Pig:IAnimal
{
    public void animalSound(){
    System.Console.WriteLine("El Cerdo dice: Oin");
    }
}

Pig animalCerdo = new Pig();
animalCerdo.animalSound();


//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//┃          Multiple interface           ┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

interface IFirst
{
    void myMethod();
}

interface ISecond
{
    void myOtherMethod();
}

class DemoClass: IFirst, ISecond
{
    public void myMethod(){

    }

    public void myOtherMethod(){

    }
}
