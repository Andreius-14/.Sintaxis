# ┌────────────────────────
# │  => BASICO ARCAICO
# └────────────────────────
class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32


human = Celsius()
human.temperature = 37

print(human.temperature)
print(human.to_fahrenheit())

# --> Directo, No hay un Validador - Tosco


# ┌────────────────────────
# │  => TRASICION SUAVE
# └────────────────────────
class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    def get_temperature(self):
        print("Getting value...")
        return self._temperature

    def set_temperature(self, value):
        print("Setting value...")
        if value < -273.15:
            raise ValueError("Over -273.15 is not possible")
        self._temperature = value


# property object - Nos evita Problemas
temperature = property(get_temperature, set_temperature)

human = Celsius(37)
print(human.temperature)
print(human.to_fahrenheit())

try:
    human.temperature = -300
except ValueError as e:
    print(e)

# --> Mantengamos el Constructor Limpio
# --> Make - Funciones Manualmente
# --> Hay Mejores Maneras


# ┌───────────────────────────────────┐
# │            RECOMENDADO            │
# └───────────────────────────────────┘


# Using @property - Una Nueva Forma Sencilla
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


# create an object
human = Celsius(37)
print(human.temperature)
print(human.to_fahrenheit())

try:
    coldest_thing = Celsius(-300)
except ValueError as e:
    print(e)
