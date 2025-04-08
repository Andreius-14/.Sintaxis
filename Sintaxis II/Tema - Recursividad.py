# ┌────────────────────────
# │  Función recursiva para calcular el factorial
# └────────────────────────
def factorial(x):
    """Esta es una función recursiva
    para encontrar el factorial de un entero"""
    if x == 1:
        return 1
    else:
        return x * factorial(x - 1)


num = 3
print("El factorial de", num, "es", factorial(num))
# Salida: El factorial de 3 es 6
