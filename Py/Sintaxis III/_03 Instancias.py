class Dog:
    def bark(self):
        print("¡Guau!")


# Crear una instancia de la clase Dog
my_dog = Dog()

# Acceder a los métodos de la instancia
my_dog.bark()  # Salida: ¡Guau!

another_dog = Dog()
another_dog.bark()  # Salida: ¡Guau!


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hola, mi nombre es {self.name} y tengo {self.age} años.")


# Crear instancias de la clase Person, pasando argumentos al constructor
person1 = Person("Alice", 30)
person2 = Person("Bob", 25)

# Acceder a los atributos y métodos de las instancias
print(person1.name)  # Salida: Alice
print(person2.age)  # Salida: 25
person1.greet()  # Salida: Hola, mi nombre es Alice y tengo 30 años.
person2.greet()  # Salida: Hola, mi nombre es Bob y tengo 25 años.


class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

    def get_count(self):
        return self.count


# Crear una instancia de la clase Counter
my_counter = Counter()

# Modificar el estado de la instancia llamando a sus métodos
my_counter.increment()
my_counter.increment()

# Acceder al estado de la instancia
print(my_counter.get_count())  # Salida: 2

another_counter = Counter()
another_counter.increment()
print(another_counter.get_count())  # Salida: 1
