class Person:  # Crea [Clase]
    def __init__(self, name, age):  # Inserta [Constructor]
        self.name = name
        self.age = age

    def myfunc(self):  # Funcion de Class
        print("Hello my name is " + self.name)


p1 = Person("John", 36)  # Crea [Objeto]
p1.myfunc()
