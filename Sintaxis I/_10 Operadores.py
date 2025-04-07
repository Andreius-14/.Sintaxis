#  ═════════════════════════════════════
#                 Operadores
#  ═════════════════════════════════════


# ═════════════════════════════════════
#                   Operadores
# ═════════════════════════════════════

# ┌───────────────────────────────────┐
# │               Aritméticos          │
# └───────────────────────────────────┘
a = 10
b = 3
suma = a + b  # 13 (suma)
resta = a - b  # 7 (resta)
multi = a * b  # 30 (multiplicación)
div = a / b  # 3.33... (división)
modulo = a % b  # 1 (resto)
potencia = a**b  # 1000 (10^3)

# ┌───────────────────────────────────┐
# │               Asignación          │
# └───────────────────────────────────┘
x = 5  # Asigna 5
x += 2  # x ahora es 7
x -= 1  # x ahora es 6
x *= 3  # x ahora es 18
x /= 2  # x ahora es 9

# ┌───────────────────────────────────┐
# │               Comparación          │
# └───────────────────────────────────┘
es_igual = a == b  # False (igualdad)
no_igual = a != b  # True (diferente)
mayor = a > b  # True (mayor que)
menor_igual = a <= b  # False (menor o igual)

# ┌───────────────────────────────────┐
# │               Lógicos             │
# └───────────────────────────────────┘
and_logico = a > 0 and b < 5  # True (y lógico)
or_logico = a < 0 or b > 0  # True (o lógico)
not_logico = not (a == 10)  # False (negación)

# ┌───────────────────────────────────┐
# │               Ternario            │
# └───────────────────────────────────┘
resultado = "mayor" if a > b else "menor"  # "mayor" (if corto)

# ┌───────────────────────────────────┐
# │           Operadores de tipo       │
# └───────────────────────────────────┘
es_numero = isinstance(a, int) or isinstance(a, float)  # True (verifica tipo)

print(suma, x, mayor, and_logico, resultado)
