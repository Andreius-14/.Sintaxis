# ┌───────────────────────────────────┐
# │         Herencia - Super          │
# └───────────────────────────────────┘

# -->  Self es igual a this


# ┌────────────────────────
# │  => Example 01
# └────────────────────────
class Vehiculo:
    def __init__(self, color):
        self.color = color

    def mostrar_color(self):
        print(f"Color del vehículo: {self.color}")


class Coche(Vehiculo):
    def __init__(self, color, marca):
        super().__init__(color)  # Llama al constructor de la clase padre
        self.marca = marca

    def mostrar_detalles(self):
        super().mostrar_color()  # Llama al método de la clase padre
        print(f"Marca del coche: {self.marca}")


mi_coche = Coche("rojo", "Toyota")
mi_coche.mostrar_detalles()


# ┌────────────────────────
# │  => Example 02
# └────────────────────────
# Ejemplo 1
class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)


class Student(Person):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)


x = Student("Mike", "Olsen")
x.printname()


# Ejemplo 2
class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)


class Student(Person):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)
        self.graduationyear = 2019  # Parametros Predeterminados


x = Student("Mike", "Olsen")
print(x.graduationyear)


# Ejemplo 3
class Person:  # Class Padre
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)


class Student(Person):  # Class Hija
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year  # Agrega Campos Nuevos


x = Student("Mike", "Olsen", 2019)
print(x.graduationyear)
