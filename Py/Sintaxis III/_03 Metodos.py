# NO involucra complejidad

# Puede verse diferentes funciones agregado
# @nameEspciasl
# sobre la funcion

# INTERFACES
from abc import ABC
from abc import abstractmethod


# ENCAPSULAMEIENTO
class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    @property
    def temperature(self):
        print("Getting value...")
        return self._temperature

    @temperature.setter
    def temperature(self, value):
        print("Setting value...")
        if value < -273.15:
            raise ValueError("-273 is not possible")
        self._temperature = value


# INTERFACES - Para esto se requiere importar


class Mando(ABC):
    @abstractmethod
    def siguiente_canal(self):
        pass

    @abstractmethod
    def canal_anterior(self):
        pass

    @abstractmethod
    def subir_volumen(self):
        pass

    @abstractmethod
    def bajar_volumen(self):
        pass


# STR -- PARA MOSTAR INFORMACION DE LA INSTANCIA,
class Persona:
    def __init__(self, nombre, edad, genero):
        self.nombre = nombre
        self.edad = edad
        self.genero = genero

    def __str__(self):
        return f"Nombre: {self.nombre}, Edad: {self.edad}, Género: {self.genero}"


p = Persona("Juan", 30, "Hombre")
print(p)
