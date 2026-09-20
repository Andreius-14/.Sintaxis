# --> Una funcion privada puede ser llamada desde una funcioon publica
class Clase:
    atributo_clase = "Hola"  # Accesible desde el exterior
    __atributo_clase = "Hola"  # No accesible

    # No accesible desde el exterior
    def __mi_metodo(self):
        print("Haz algo")
        self._variable = 0

    # Accesible desde el exterior
    def metodo_normal(self):
        # El método si es accesible desde el interior
        self.__mi_metodo()


mi_clase = Clase()
# mi_clase.__atributo_clase  # Error! El atributo no es accesible
# mi_clase.__mi_metodo()  # Error! El método no es accesible
print(mi_clase.atributo_clase)  # Ok!
mi_clase.metodo_normal()  # Ok!

"""Acceder a Privado"""
# print(mi_clase._Clase__atributo_clase)  # 'Hola'
# mi_clase._Clase__mi_metodo()  # Haz algo


# No existe lo privados en Python. Pero podemos emplear _ _para interpretar que una funcion es Privada
