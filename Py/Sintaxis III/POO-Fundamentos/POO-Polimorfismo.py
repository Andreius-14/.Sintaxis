# ┌────────────────────────
# │  => Example 01 - ACOPLAMIENTO
# └────────────────────────
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def sonido(self):
        print("Sonido genérico de un animal")


class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)
        self.raza = raza

    def sonido(self):
        super().sonido()
        print("Guau guau!")


# Crear una instancia de la clase Perro
mi_perro = Perro("Firulais", "Labrador")

# Acceder a los atributos nombre y raza
print(mi_perro.nombre)  # Salida: Firulais
print(mi_perro.raza)  # Salida: Labrador

# Llamar al método sonido() de la clase Perro
mi_perro.sonido()  # Salida: Sonido genérico de un animal
# Guau guau!


# ┌────────────────────────
# │  => Example 02  - ACOPLAMIENTO
# └────────────────────────
class Persona:
    def __init__(self, nombre, edad, lugar_residencia):
        self.nombre = nombre
        self.edad = edad
        self.lugar_residencia = lugar_residencia

    def descripcion(self):
        print(
            "Nombre:",
            self.nombre,
            "Edad:",
            self.edad,
            "Residencia:",
            self.lugar_residencia,
        )


class Empleado(Persona):
    def __init__(
        self, salario, antiguedad, nombre_empleado, edad_empleado, residencia_empleado
    ):
        super().__init__(nombre_empleado, edad_empleado, residencia_empleado)
        self.salario = salario
        self.antiguedad = antiguedad

    def descripcion(self):
        # Opcional
        super().descripcion()  # referencia a funcion descripcion
        print("Salario:", self.salario, "Antigüedad:", self.antiguedad)


Manuel = Empleado(1500, 15, "Manuel", 55, "Colombia")
Manuel.descripcion()


# ┌────────────────────────
# │  => Example 03 - SOBREESCRIBTE [NO recomendado]
# └────────────────────────
class Animal:
    # Sobrecarga de Metodos
    def emitir_sonido(self):
        print("Emitiendo sonido genérico de animal")

    def emitir_sonido(self, sonido):
        print(f"Emitiendo sonido de {sonido}")


class Perro(Animal):
    def emitir_sonido(self):
        print("Ladrando")


class Gato(Animal):
    def emitir_sonido(self):
        print("Maullando")


# Ejemplo de método sobrecargado
a = Animal()
a.emitir_sonido()  # Emitiendo sonido genérico de animal
a.emitir_sonido("rugido")  # Emitiendo sonido de rugido

# Ejemplo de método sobrescrito
p = Perro()
p.emitir_sonido()  # Ladrando

g = Gato()
g.emitir_sonido()  # Maullando


# ┌────────────────────────
# │  => Example 04 - Polimorfismo Acoplando  [RECOMENDADO]
# └────────────────────────
class Animal:
    def make_sound(self):
        return "El animal hace un sonido"


class Perro(Animal):
    def make_sound(self):
        original_message = super().make_sound()
        return f"{original_message}, el perro ladra"


class Gato(Animal):
    def make_sound(self):
        original_message = super().make_sound()
        return f"{original_message}, el gato maulla"


perro = Perro()
print(perro.make_sound())  # Output: El animal hace un sonido, el perro ladra
gato = Gato()
print(gato.make_sound())  # Output: El animal hace un sonido, el gato maulla
