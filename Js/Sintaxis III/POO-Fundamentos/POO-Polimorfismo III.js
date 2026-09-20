class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("El animal hace un sonido.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("El perro ladra.");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("El gato maulla.");
  }
}

// Creamos una función que recibe un objeto de tipo Animal y llama al método makeSound()
function animalSound(animal) {
  animal.makeSound();
}

// Creamos instancias de las clases
const animal = new Animal("Animal");
const perro = new Dog("Perro");
const gato = new Cat("Gato");

// Llamamos la función animalSound() pasándole las instancias de las clases
animalSound(animal); // Imprime "El animal hace un sonido."
animalSound(perro); // Imprime "El perro ladra."
animalSound(gato); // Imprime "El gato maulla."
