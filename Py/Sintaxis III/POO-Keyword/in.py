if x in [1, 2, 3]:
    print("x es uno de los números 1, 2 o 3")

for element in [1, 2, 3]:
    print(element)

squares = [x**2 for x in range(10)]


txt = "The rain in Spain stays mainly in the plain"
x = "ain" in txt
print(x)  # Imprime True

txt = "The rain in Spain stays mainly in the plain"
x = "ain" not in txt
print(x)  # Imprime False
