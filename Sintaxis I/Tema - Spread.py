# ┌───────────────────────────────────┐
# │       SPREAD - UNPACKING          │
# └───────────────────────────────────┘


# ┌────────────────────────
# │  => FUNCTION
# └────────────────────────
def my_function(*kids):
    print("El Joven es: " + kids[2])


my_function("Emil", "Tobias", "Linus")  # Output: El Joven es: Linus


"""
    Argumentos de palabras clave arbitrarias
"""


def my_function(**kid):
    print("His last name is " + kid["Iname"])


my_function(fname="Tobias", Iname="Refsnes")  # Output: His last name is Refsnes

# ┌────────────────────────
# │  => VARIABLES
# └────────────────────────

lista1 = [1, 2, 3]
lista2 = [4, 5, 6]

lista_combinada = [*lista1, *lista2]

print(lista_combinada)  # Muestra [1, 2, 3, 4, 5, 6]

diccionario1 = {"a": 1, "b": 2}
diccionario2 = {"c": 3, "d": 4}

diccionario_combinado = {**diccionario1, **diccionario2}

print(diccionario_combinado)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}
