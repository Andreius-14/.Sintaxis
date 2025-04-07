texto = "Repaso de Python con Victor"
nombre = "Víctor Robles"
altura = "187cm"
year = 2020

# ┌────────────────────────
# │  => BASICO
# └────────────────────────
print(f"{texto} {nombre} {altura} {str(year)}")
print(texto + " " + nombre + " " + altura + " " + str(year))


# ┌────────────────────────
# │  => OLD - I
# └────────────────────────

# Variables
cantidad = 3
itemno = 567

# Interpolacion
myorder = "Hay {0} items numero {1} for {0} dollars."

# Imprime [Asigna Orden]
print(myorder.format(cantidad, itemno))
# Hay 3 items numero 567 for 3 dollars.

# ┌────────────────────────
# │  => OLD - II
# └────────────────────────

# Variables
age = 36
name = "John"

# Interpolacion
txt = "His name is {1}. {1} is {0} years"

# Imprime [Asigna Orden]
print(txt.format(age, name))
# His name is John. John is 36 years


# ┌────────────────────────
# │  => OLD - EXTRA
# └────────────────────────

pi = 3.14159
mensaje = "El valor de pi es aproximadamente {:.2f}.".format(pi)  # Limita a 2 decimales
print(mensaje)  # Salida: El valor de pi es aproximadamente 3.14.

precio = 1000
mensaje = "El precio con descuento es {:,.2f}.".format(
    precio * 0.9
)  # Agrega separador de miles y 2 decimales
print(mensaje)  # Salida: El precio con descuento es 900.00.
