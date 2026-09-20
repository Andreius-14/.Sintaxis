#  ═════════════════════════════════════
#                 Operadores
#  ═════════════════════════════════════

# ┌───────────────────────────────────┐
# │               Aritméticos          │
# └───────────────────────────────────┘
a = 10
b = 3
suma = a + b  # 13 (suma)
resta = a - b  # 7 (resta)
multi = a * b  # 30 (multiplicación)
modulo = a % b  # 1 (resto)
potencia = a**b  # 1000 (10^3)

div = a / b  # 3.33... (división)
resultado6 = 7 // 3  # Salida: 2 (int)
resultado7 = 6 // 3  # Salida: 2 (int)
resultado8 = 5.0 // 2  # Salida: 2.0 (float)

# Especial

# ┌───────────────────────────────────┐
# │               Asignación          │
# └───────────────────────────────────┘
x = 5  # Asigna 5
x += 2  # x ahora es 7
x -= 1  # x ahora es 6
x *= 3  # x ahora es 18
x /= 2  # x ahora es 9

# **=
# //=
# &=
# |=

# ┌───────────────────────────────────┐
# │               Comparación          │
# └───────────────────────────────────┘
es_igual = a == b  # False (igualdad)
no_igual = a != b  # True (diferente)
mayor = a > b  # True (mayor que)
menor_igual = a <= b  # False (menor o igual)

# ┌───────────────────────────────────┐
# │             O.Lógicos             │
# └───────────────────────────────────┘
and_logico = a > 0 and b < 5  # True (y lógico)
or_logico = a < 0 or b > 0  # True (o lógico)
not_logico = not (a == 10)  # False (negación)

# ┌───────────────────────────────────┐
# │              O.Ternario            │
# └───────────────────────────────────┘
resultado = "mayor" if a > b else "menor"  # "mayor" (if corto)

# ┌───────────────────────────────────┐
# │           Operadores de tipo       │
# └───────────────────────────────────┘
es_numero = isinstance(a, int) or isinstance(a, float)  # True (verifica tipo)

print(suma, x, mayor, and_logico, resultado)
# ┌───────────────────────────────────┐
# │           Pertenencia             │
# └───────────────────────────────────┘
a = [1, 2, 3, 4, 5]
# Muestra True
print(3 in a)
# Muestra True
print(12 not in a)
# ┌───────────────────────────────────┐
# │            Identidad              │
# └───────────────────────────────────┘
aa = 3
bb = 3
cc = 4
print(aa is bb)  # muestra True
print(aa is not bb)  # muestra False
print(aa is not cc)  # muestra True

x = 1
y = x
z = y
print(z is 1)  # muestra True
print(z is x)  # muestra True
