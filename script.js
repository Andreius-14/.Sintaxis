class Animal {
  constructor (name) {
    this.name = name
  }

  sayHello () {
    console.log(`Hello, my name is ${this.name}`)
  }

  sonidoAnimal () {
    console.log('Haciendo Ruido')
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name)
  }

  bark () {
    console.log('Waf!')
  }

  sonidoAnimal () {
    console.log('Gua Gua Gua')
  }
}

const dog = new Dog('Destructor De Mundo')
dog.sayHello() // Hello, my name is Fido
dog.bark() // Woof!
dog.sonidoAnimal()
