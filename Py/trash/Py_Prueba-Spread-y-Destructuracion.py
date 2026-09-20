# ===================
# Funciones
# ===================


def output(valorName="", valor=""):
    print(f"Valor [{valorName}] ==> {valor}")


# ===================
# Codigo
# ===================
a, b, *resto = (1, 2, 3, 4, 5, 9000)


# Imprimir valores
output("a", a)  # Imprimir el valor de a
output("b", b)  # Imprimir el valor de b
output("resto", resto)  # Imprimir el resto como list
