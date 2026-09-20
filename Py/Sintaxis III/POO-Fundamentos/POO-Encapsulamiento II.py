# ┌───────────────────────────────────┐
# │            RECOMENDADO            │
# └───────────────────────────────────┘
class Person:
    def __init__(self, age=0):
        self.age = age  # Esto usa el setter automáticamente

    @property
    def age(self):
        print("Getting age...")
        return self._age

    @age.setter
    def age(self, value):
        print("Setting age...")
        if value < 0:
            raise ValueError("Age cannot be negative!")
        self._age = value


# Crear una persona
person = Person(25)

# Obtener la edad
print(person.age)  # Output: Getting age... 25

# Cambiar la edad
person.age = 30  # Output: Setting age...
print(person.age)  # Output: Getting age... 30

# Intentar asignar una edad negativa
try:
    person.age = -5
except ValueError as e:
    print(e)  # Output: Age cannot be negative!
