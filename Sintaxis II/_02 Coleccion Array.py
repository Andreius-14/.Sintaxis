lista = [1, 2.5, "DevCode", [5, 6], 4]

print(lista[0])  # 1
print(lista[1])  # 2.5
print(lista[2])  # DevCode
print(lista[3])  # [5, 6]
print(lista[3][0])  # 5
print(lista[3][1])  # 6
print(lista[1:3])  # [2.5, 'DevCode']
print(lista[1:6])  # [2.5, 'DevCode', [5, 6], 4]
print(lista[1:6:2])  # [2.5, [5, 6]]

# ┌────────────────────────
# │  Bucle a través de una lista (For in)
# └────────────────────────
thislist = ["apple", "banana", "cherry"]
for x in thislist:
    print(x)

# ┌────────────────────────
# │  Compruebe si el elemento existe (IN)
# └────────────────────────
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
    print("Yes, 'apple' is in the fruits list")


# ┌────────────────────────
# │  Listas o Arrays - Acceso a elementos
# └────────────────────────
thislist = ["apple", "banana", "cherry"]
print(thislist)  # ['apple', 'banana', 'cherry']
print(thislist[1])  # banana
print(thislist[-1])  # cherry

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])  # ['cherry', 'orange', 'kiwi'] # Devuelve una Parte Del Array
print(
    thislist[:4]
)  # ['apple', 'banana', 'cherry', 'orange'] # Retornara Parte Del Array
print(
    thislist[2:]
)  # ['cherry', 'orange', 'kiwi', 'melon', 'mango'] # Retornara Apartir dela Posicion 2

# ┌────────────────────────
# │  Cambiar valor de elemento
# └────────────────────────
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"  # Modificamos el Segundo Elemento
print(thislist)  # ['apple', 'blackcurrant', 'cherry']
