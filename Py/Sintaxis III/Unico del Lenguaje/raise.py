def dividir(a, b):
    if b == 0:
        raise ZeroDivisionError("No se puede dividir por cero")
    return a / b


try:
    resultado = dividir(10, 0)
    print(resultado)
except ZeroDivisionError as e:
    print(f"¡Error! {e}")  # Salida: ¡Error! No se puede dividir por cero


def procesar_edad(edad):
    if edad < 0:
        raise ValueError("La edad no puede ser negativa")
    print(f"Edad procesada: {edad}")


try:
    procesar_edad(-5)
except ValueError as e:
    print(f"¡Error! {e}")  # Salida: ¡Error! La edad no puede ser negativa
