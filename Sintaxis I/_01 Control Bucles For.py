# ┌────────────────────────
# │  => Basico - Inicia en [0]
# └────────────────────────
for x in range(6):
    print(x)

# ┌────────────────────────
# │  => Basico - Inicia en [2]
# └────────────────────────
for x in range(2, 6):
    print(x)

# ┌────────────────────────
# │  => Basico - else, Accion Final
# └────────────────────────
for x in range(6):
    print(x)
else:
    print("Finalizado \n")


# ┌────────────────────────
# │  => Avanzado - No Consecutivo
# └────────────────────────
for x in range(2, 30, 3):
    print(x)

# ┌────────────────────────
# │  => FOR ANIDADO
# └────────────────────────
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x, y)


# ┌───────────────────────────────────┐
# │           COMPRESION              │
# └───────────────────────────────────┘

squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Compresion que empieza con "a"
words = ["apple", "banana", "cherry", "date", "elderberry"]
words_starting_with_a = {word for word in words if word[0] == "a"}  # {"apple"}

# Crea un diccionario que asigna a cada número par del 0 al 9 su cuadrado
squares_dict = {x: x**2 for x in range(10) if x % 2 == 0}
# squares_dict = {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Crea una lista de tuplas (número, cuadrado del número) para los números del 0 al 9
squares_list = [(x, x**2) for x in range(10)]
# squares_list = [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25), (6, 36), (7, 49), (8, 64), (9, 81)]


# ┌────────────────────────
# │  => AFTER - BEFORE
# └────────────────────────

"""lista de comprensión"""

# Antes
resultado = []
for i in range(10):
    resultado.append(i * 2)
# resultado = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Despues
resultado = [i * 2 for i in range(10)]
# resultado = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
