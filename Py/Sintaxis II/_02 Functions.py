#  ┌────
#  │  => PREDETERMINADOS
#  └────


def my_function():
    print("Hello from a function")


my_function()  # Hello from a function


# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃             PARAMETROS                ┃
# ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


#  ┌────
#  │  => SPREAD - Unpacking
#  └────
def multiply(a, b):
    return a * b


numbers = [3, 5]

print(multiply(*numbers))  # Output: 15


#  ┌────
#  │  => Funcion con Array
#  └────
def my_function(food):
    for x in food:  # For in
        print(x)


fruits = ["apple", "banana", "cherry"]
my_function(fruits)
# Salida:
# apple
# banana
# cherry


# ┌────────────────────────
# │  Funcion Con Parametro
# └────────────────────────
def my_function(fname):
    print(fname + " Refsnes")  # Llamada a la Funcion usando Argumentos


my_function("Emil")
my_function("Tobias")
my_function("Linus")
# Salida:
# Emil Refsnes
# Tobias Refsnes
# Linus Refsnes


# ┌────────────────────────
# │  Funcion con Parametros
# └────────────────────────
def my_function(fname, lname):
    print(fname + " " + lname)  # Llamada a la Funcion con Argumentos


my_function("Emil", "Refsnes")
# Salida: Emil Refsnes


# ┌────────────────────────
# │  Parametro Predeterminado
# └────────────────────────
def my_function(country="El Rico Peru"):
    print("I am from " + country)


my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")
# Salida:
# I am from Sweden
# I am from India
# I am from El Rico Peru
# I am from Brazil


# ┌────────────────────────
# │  Argumentos com Palabras Claves - Permite Ingresar Argumentos en Desorden
# └────────────────────────
def my_function(child3, child2, child1):
    print("The youngest child is " + child3)


my_function(child1="Emil", child2="Tobias", child3="Linus")
# Salida: The youngest child is Linus
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃               lambda                  ┃
# ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

suma = lambda a, b: a + b
resultado = suma(5, 3)
print(resultado)  # Salida: 8

doble = lambda x: x * 2
print(doble(7))  # Salida: 14

saludo = lambda: "Hola"
print(saludo())  # Salida: Hola
