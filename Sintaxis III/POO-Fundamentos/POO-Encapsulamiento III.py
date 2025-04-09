class Usuario:

    # Constructor
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self._edad = edad

    # Encapsulamiento - [nombre]
    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nuevo_nombre):
        self._nombre = nuevo_nombre

    # Encapsulamiento - [edad]
    @property
    def edad(self):
        return self._edad

    @edad.setter
    def edad(self, nueva_edad):
        if nueva_edad >= 0:
            self._edad = nueva_edad
        else:
            raise ValueError("La edad debe ser un número positivo")


# Instancia
usuario = Usuario("John Doe", 25)

print(usuario.nombre)  # Output: John Doe
print(usuario.edad)  # Output: 25

# Set
usuario.nombre = "Jane Smith"
print(usuario.nombre)  # Output: Jane Smith

# Set
usuario.edad = 30
print(usuario.edad)  # Output: 30

# Error
try:
    usuario.edad = -5  # Genera ValueError: La edad debe ser un número positivo
except ValueError as e:
    print(e)
