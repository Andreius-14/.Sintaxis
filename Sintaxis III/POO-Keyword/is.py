x = None
if x is None:
    print("x es None")

y = 5
if y is not None:
    print("y no es None")


# ERROR - Asigna al mismo especio en memoria
lista1 = [1, 2, 3]
lista2 = lista1
lista3 = [1, 2, 3]

print(lista1 is lista2)  # True (apuntan al mismo objeto)
print(lista1 is lista3)  # False (objetos diferentes con el mismo valor)

a = "hola"
b = "hola"
c = "hola mundo"
d = "hola mundo"

print(a is b)  # True (cadenas internadas)
print(c is d)  # False (cadenas no internadas)
