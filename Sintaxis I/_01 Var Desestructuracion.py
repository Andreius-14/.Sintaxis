# ┌────────────────────────
# │  => TUPLA
# └────────────────────────

tupla = (1, 2, 3)
a, b, c = tupla

print(a)
print(b)
print(c)

# ┌────────────────────────
# │  => ARRAY
# └────────────────────────

lista = [1, 2, 3]
x, y, z = lista

print(x)
print(y)
print(z)

# ┌────────────────────────
# │  => DICCIONARIO
# └────────────────────────

# Destructuración de un diccionario
diccionario = {"nombre": "Juan", "edad": 30}
nombre, edad = diccionario.values()
print(nombre, edad)  # Resultado: Juan 30
