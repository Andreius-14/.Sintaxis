# ┌───────────────────────────────────┐
# │             Diccionario           │
# └───────────────────────────────────┘
mi_diccionario = {"nombre": "Ana", "edad": 30, "ciudad": "Lima"}
print(mi_diccionario)  # Salida: {'nombre': 'Ana', 'edad': 30, 'ciudad': 'Lima'}

# ┌────────────────────────
# │  => Constructor
# └────────────────────────
otro_diccionario = dict(nombre="Carlos", edad=25, profesion="Ingeniero")
print(
    otro_diccionario
)  # Salida: {'nombre': 'Carlos', 'edad': 25, 'profesion': 'Ingeniero'}

tercer_diccionario = dict([("manzana", 1), ("banana", 2), ("cereza", 3)])
print(tercer_diccionario)  # Salida: {'manzana': 1, 'banana': 2, 'cereza': 3}

# ┌────────────────────────
# │  => Extraer
# └────────────────────────
diccionario = {
    "nombre": "Carlos",
    "edad": 22,
    "cursos": ["Python", "Django", "JavaScript"],
}

print(diccionario["nombre"])  # Carlos
print(diccionario["edad"])  # 22
print(diccionario["cursos"])  # ['Python', 'Django', 'JavaScript']

print(diccionario["cursos"][0])  # Python
print(diccionario["cursos"][1])  # Django
print(diccionario["cursos"][2])  # JavaScript

for key in diccionario:
    print(key, ":", diccionario[key])

# -- Para recorrer todo el Diccionario

# ┌────────────────────────
# │  => Adición de elementos
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
thisdict["color"] = "red"
print(thisdict)

# ┌────────────────────────
# │  => Cambiar valores
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
thisdict["year"] = 2018
# El print(thisdict) mostraría el diccionario con el valor de "year" cambiado a 2018

# ┌────────────────────────
# │  Tres Diccionarios Anidados
# └────────────────────────
myfamily = {
    "child1": {"name": "Emil", "year": 2004},
    "child2": {"name": "Tobias", "year": 2007},
    "child3": {"name": "Linus", "year": 2011},
}

# ┌────────────────────────
# │  Un diccionario que contendrá los otros tres diccionarios
# └────────────────────────
child1 = {"name": "Emil", "year": 2004}
child2 = {"name": "Tobias", "year": 2007}
child3 = {"name": "Linus", "year": 2011}

myfamily = {"child1": child1, "child2": child2, "child3": child3}

# ┌───────────────────────────────────┐
# │          FOR - Diccionario        │
# └───────────────────────────────────┘
# ┌────────────────────────
# │  => Devuelve las Claves del Diccionario
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
for x in thisdict:
    print(x)

# ┌────────────────────────
# │  => Devuelve los Valores del Diccionario (Accediendo por clave)
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
for x in thisdict:
    print(thisdict[x])

# ┌────────────────────────
# │  => Devuelve los Valores del Diccionario (Usando .values())
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
for x in thisdict.values():
    print(x)

# ┌────────────────────────
# │  => Reconoce Claves y Valores (Usando .items())
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
for x, y in thisdict.items():
    print(x, y)

# ┌────────────────────────
# │  => IF
# └────────────────────────
thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}
if "model" in thisdict:
    print("Yes, 'model' is one of the keys in the thisdict dictionary")
