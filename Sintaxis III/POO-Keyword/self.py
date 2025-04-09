# 🌱 Usando self en la Instancia dentro de una Clase
class Coche:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.motor = Motor(self)

    def encender(self):
        self.motor.arrancar()


class Motor:
    def __init__(self, coche):
        self.coche = coche
        self.potencia = 2000

    def arrancar(self):
        print(f"El motor del coche {self.coche.marca} {self.coche.modelo} ha arrancado")


# Instanciar un objeto de la clase Coche
mi_coche = Coche("Ford", "Mustang")
mi_coche.encender()  # Output: El motor del coche Ford Mustang ha arrancado
