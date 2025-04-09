# 🌱 un interfaz define como se comporta un objeto y lo que se puede hacer con el.
# 🌱 No se puede crear un objeto de una clase interfaz
# 🌱 Una plantilla que si o si se debe cumplir. Sino `Error`
"""
⡿⣿⣻⣿⣻⣿⣻⣿⣻⣽⢿⣟⣿⣽⢿⣟⣿⣽⢿⣟⣿⣽⢿⣟⣿⣟⣿⣟⣿⣟⣯⡿⣿⣻⣯⡿⣿⣻⣯⡿⣿⣻⣯⡿⣿⣻⣿⣻⣿⣻⣿⣻⣿⣻⣽⢿⣟⣿⣽⢿
⣿⣯⡿⣾⣻⣾⣻⣾⣻⣽⢿⣽⣻⣾⣻⠝⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠉⠑⠉⠉⠉⠉⠉⠁⡉⠉⠙⠳⣿⣯⣟⣷⡿⣯⣿⣾⣻⣾⣻⣾⣻⣾⣻⣽⢿⣽⣻⣾⢿
⡿⣾⣻⣿⣻⣾⣻⣾⢿⣾⣻⣽⣻⠞⠁⠀⠀⢂⣀⣐⢀⣀⢄⣀⢄⣀⢂⣁⣀⣀⢄⡐⣀⡐⣀⣀⠀⠄⠀⢹⣾⣻⣷⣟⣯⡿⣾⣻⣽⣟⣾⢿⣾⣻⣾⢿⣽⣻⣾⢿
⡿⣿⣻⣾⣻⣾⣻⣾⢿⣾⣻⠝⠁⠀⠀⠀⠄⢘⣿⣾⣻⣟⣯⣿⢯⣟⣯⣟⣷⣟⣯⣿⢯⣟⣯⣟⡇⠀⠀⢸⣷⣟⣷⣟⣷⡿⣿⣻⣷⣻⣯⣿⣾⣻⣾⢿⣽⣻⣾⣻
⣟⣯⣿⣾⣻⣾⢿⣾⣻⠞⠁⠀⠀⠀⠐⠀⠀⢸⣳⣿⣽⡾⠁⠉⠉⠉⠁⠉⠁⠉⠁⠉⢽⣟⣯⣟⡇⠀⠈⢸⣷⣟⣷⣟⣷⣟⣯⡿⣾⣻⣾⣻⣾⣻⣾⣻⣽⣻⣾⣻
⣟⣷⣿⢾⣻⣾⢿⡞⠁⠀⠀⢀⠀⠁⠀⠐⠀⣼⣻⣾⣳⣿⠻⠻⠻⠻⠻⠻⠻⠻⠻⠻⢿⣯⣷⡿⡇⠀⢀⢸⣷⣟⣷⣟⣷⠟⠁⠀⠀⠀⠙⣿⣾⣻⣾⣻⣽⣻⣾⣻
⣟⣷⣟⣿⣻⣾⣿⠂⠀⠀⢴⣤⣴⣴⣬⣴⡾⣿⣽⣾⣻⣾⣤⣤⣤⣦⣤⣴⣤⣤⣦⣤⣾⣟⣾⣟⡇⠀⠀⢸⡷⣟⣷⠟⠁⠀⠀⠐⠀⠁⠀⣽⣾⣻⣾⣻⣾⣻⣾⣻
⣟⣷⣟⣿⣽⣾⣻⠅⠀⠀⣹⣾⣻⣾⣽⣾⣻⣯⣷⢿⣽⣾⡷⣟⣷⣟⣷⣟⣷⣟⣷⣟⣷⣟⣷⣟⡇⠀⣠⣾⢿⠟⠁⠀⠀⠠⠈⠀⠀⢄⣶⣻⣾⣻⣾⣻⣾⣻⣾⣻
⣿⢷⣟⣷⣿⢾⣻⠅⠀⠀⣺⢿⣽⢾⣻⣾⣻⣾⣻⢿⣽⣾⣻⣿⣽⣾⡷⣟⣷⣟⣷⣟⣷⣟⣷⣟⡧⣞⣿⠝⠁⠀⠀⠀⠂⠀⡀⠄⠂⠙⠎⠁⢹⣽⢾⣻⣾⣻⣾⣻
⣟⣿⣯⡷⣟⣿⣻⠅⠀⠀⣺⣿⣽⢿⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠉⠉⠉⠉⠉⠁⠉⣳⣟⣷⣟⣿⠟⠁⠀⠀⠐⠈⠀⠠⢀⣴⡿⠂⠀⢀⣴⢿⣽⢿⣻⣾⣻⣾⣻
⣿⢷⣯⡿⣟⣿⣽⠅⠀⠀⢼⣷⡿⣿⡽⠷⠻⠷⠻⠯⠿⠻⠾⠯⠿⠯⠿⠯⠿⠯⠿⠯⡷⣟⣷⠟⠁⠀⠀⠀⠐⠀⠀⢄⣶⡻⠋⠀⢀⣴⡿⣯⣿⣽⢿⣽⣾⣻⢾⣻
⣿⢿⣽⢿⣯⡷⣿⠅⠀⠀⢽⣾⣻⣯⣧⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⡤⣾⣽⠟⠁⠀⠀⠀⡀⠁⠀⣐⣴⡿⠋⠀⢠⣼⢿⣯⡿⣯⣷⡿⣿⣽⢾⣻⢿⣽
⣯⣿⣽⢿⣽⢿⣽⠅⠀⠀⣹⣯⡿⣾⡇⠁⠁⠁⡁⠁⠁⢁⠁⠁⠁⠁⠁⠁⣡⣯⡿⣯⣅⠀⠀⢀⠀⠂⠀⢀⡶⡯⠋⠀⣠⣞⣿⣽⢿⣽⢿⣽⢷⣿⣻⣽⢿⣽⢿⣽
⣯⡿⣾⢿⣽⢿⣽⠅⠀⠀⣺⢯⣿⢷⣿⢿⡿⣿⣻⢿⡿⣟⣿⢿⡿⣿⡿⣿⣻⠞⠁⠈⠻⣷⣄⠀⠀⢠⡼⣯⡿⣧⣰⣯⣿⣽⢿⣾⢿⣽⢿⣽⢿⣽⢯⣿⣻⣽⢿⣽
⣯⡿⣿⣻⣽⣿⣽⠅⠀⠀⣺⢿⣽⢿⣽⢿⠝⠉⠻⣿⣽⢿⣽⢿⣽⣯⡿⠟⠁⠀⠀⠀⠀⠈⠻⣷⡼⣿⠟⢹⡿⣯⡿⣽⡷⣿⣻⣽⢿⣽⢿⣽⢿⣽⢿⣽⢿⣽⢿⣽
⣯⡿⣯⣿⣽⢾⣿⡁⠀⠀⣺⢿⣽⢿⣽⠃⢀⡆⠀⣿⣾⢿⣽⢿⣽⡷⠋⠀⠀⡀⠐⠈⠀⣀⡶⣯⡿⠉⠀⢸⡿⣯⡿⣯⡿⣯⣿⣽⢿⣽⢿⣽⢿⣽⢿⣽⢿⣽⢿⣽
⣯⡿⣯⡿⣾⢿⣽⡂⠀⠀⣺⢿⣽⢿⣏⠀⣸⡇⠀⣺⣽⢿⣽⢿⡽⠁⠀⠀⡀⠀⢀⢠⡶⣿⣻⣯⡇⠀⠀⢸⡿⣯⡿⣯⡿⣯⡿⣾⣟⣯⡿⣯⣿⣽⢿⣽⢿⣽⢿⣽
⣿⣻⣯⡿⣿⣻⣽⡂⠀⠀⣺⢿⣽⣟⣇⠀⣺⡗⠀⠚⠀⡀⠹⢿⠁⠀⠀⡀⣠⣰⡾⣿⣻⣯⣟⣷⡇⠀⠐⢸⣟⣯⡿⣯⡿⣯⡿⣯⣿⣽⣟⣯⡿⣾⢿⣽⢿⣽⢿⣽
⣯⣿⣾⣟⣯⣿⣽⡂⠀⠀⣺⢿⣽⣻⣾⣻⣟⣿⣀⣠⣼⢷⣄⣄⣰⣴⡶⣾⣟⣯⡿⣯⣟⣷⣟⣷⡇⠀⠀⢸⡿⣽⣟⣯⣿⣯⡿⣯⡿⣾⣻⣷⢿⣿⣻⣽⢿⣽⣻⣽
⣯⡿⣾⣻⣷⣻⣾⡂⠀⠀⣺⣿⣽⣻⣾⣻⣽⣻⣾⣻⣾⣻⣟⣯⣟⣷⣟⣿⣾⣷⣟⣯⣟⣷⣟⣷⡇⠀⠈⢸⣟⣯⣟⣷⡿⣾⣻⣯⡿⣯⡿⣾⣻⣾⣻⣾⣻⣽⣻⣽
⣿⣻⣽⣟⣾⣻⣽⡆⠀⢀⠀⠁⠈⠈⠈⠈⠈⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠁⠈⠀⠁⠁⠁⠁⠁⠁⢀⠀⠂⣸⣟⣷⣟⣷⣟⣿⣻⣾⣻⣯⡿⣟⣿⢾⣻⣾⣻⣽⣻⣾
⣷⣟⣷⣟⣯⣿⢷⣻⣦⣄⣄⣄⣐⣠⣠⣠⣠⣠⣠⣠⣠⣠⣐⣠⣠⣠⣠⣐⣠⣠⣂⣄⣄⣄⣄⣂⣄⣤⣖⣿⣽⣷⣟⣷⣟⣿⣽⣾⣟⣾⣟⣿⣽⢿⣻⣾⣻⣽⣻⣾
⣷⣟⣷⣟⣷⣟⣿⣻⣽⣻⣾⣻⣿⣽⢿⣽⢿⣽⣟⣿⢯⣿⣟⡿⣯⡿⣟⡿⣯⣷⣟⣿⣯⣿⣻⣯⣟⣷⣟⣷⣟⣾⣯⣷⣟⣷⣿⢾⣻⣾⣻⣾⣻⣿⣻⣾⣻⣯⣿⢾
"""

# Example 01
from abc import ABC

# Example 02
from abc import abstractmethod


# ┌────────────────────────
# │  => Example 02
# └────────────────────────
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


# ┌────────────────────────
# │  => Example 03
# └────────────────────────
# Sin Predeterminado


# Interfaz
class Animal(ABC):
    @abstractmethod
    def hacer_sonido(self):
        pass


# Uso Interfaz
class Perro(Animal):
    def hacer_sonido(self):
        print("Guau")


class Gato(Animal):
    def hacer_sonido(self):
        print("Miau")


# ┌────────────────────────
# │  => Example 04  [RECOMENDADO]
# └────────────────────────
# Con Predeterminado


class IAnimal(ABC):
    @abstractmethod
    def hacer_sonido(self):
        pass

    def dormir(self):
        print("El animal está durmiendo")


class Dog(IAnimal):
    def hacer_sonido(self):
        print("Guau")


class Cat(IAnimal):
    def hacer_sonido(self):
        print("Miau")


perro = Dog()
gato = Cat()

perro.hacer_sonido()  # Salida: Guau
gato.hacer_sonido()  # Salida: Miau

perro.dormir()  # Salida: El animal está durmiendo
gato.dormir()  # Salida: El animal está durmiendo
