/*
[Polimorfismo]

*/
class Animal {
  hacerSonido() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  // !RECOMENDADO
  hacerSonido() {
    super.hacerSonido(); // Llamada a la superclase
    console.log("¡Guau, guau!");
  }
}

class Gato extends Animal {
  // RECOMENDADO
  hacerSonido() {
    console.log("¡Miau!");
  }
}

function hacerHablar(animal) {
  animal.hacerSonido(); // Polimorfismo
}

const miPerro = new Perro();
const miGato = new Gato();

hacerHablar(miPerro); // Salida: Sonido genérico ¡Guau, guau!
hacerHablar(miGato); // Salida: ¡Miau!
