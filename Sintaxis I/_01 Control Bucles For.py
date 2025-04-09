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
