# ┌───────────────────────────────────┐
# │             Clase Padre           │
# └───────────────────────────────────┘
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        print("Sonido genérico de animal")


# ┌───────────────────────────────────┐
# │             Clase Hijo            │
# └───────────────────────────────────┘
class Perro(Animal):
    def hacer_sonido(self):
        print("¡Guau!")


class Gato(Animal):
    def hacer_sonido(self):
        print("¡Miau!")


# Instancia
mi_perro = Perro("Buddy")
mi_gato = Gato("Whiskers")

print(mi_perro.nombre)
mi_perro.hacer_sonido()

print(mi_gato.nombre)
mi_gato.hacer_sonido()
