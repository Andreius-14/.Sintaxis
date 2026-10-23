//          ╭─────────────────────────────────────────────────────────╮
//          │                       abstraccion                       │
//          ╰─────────────────────────────────────────────────────────╯
//          Una etiqueta especial
//          - Limita a la clase 
//          - ya no permite instancia 
//          - solo permite extende
//          - incentiva la herncia 
//          Generando asi intancias de la herencia
//
//
abstract class Animal {
  constructor(public nombre: string) { }
  abstract hacerSonido(): void;
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

const miPerro = new Perro("Firulais");
miPerro.hacerSonido();

// ❌ Error: No se puede instanciar una clase abstracta directamente
// const animalGenerico = new Animal("Genérico");
