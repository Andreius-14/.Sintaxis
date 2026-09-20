# ┌────────────────────────
# │  => IF ANIDADO
# └────────────────────────

x = 41

if x > 10:
    # Mensaje
    print("Mas de 10,")
    if x > 20:
        print("Mayor a 20!")
    else:
        print("Menor a 20.")

# ┌────────────────────────
# │  => IF ELSE
# └────────────────────────

a = 200
b = 33

if b > a:
    print("b is greater than a")
else:
    print("b is not greater than a")
# ┌────────────────────────
# │  => IF Pass
# └────────────────────────

a = 33
b = 200

if b > a:
    pass

# ┌────────────────────────
# │  => IF elif
# └────────────────────────

a = 200
b = 33

if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")

    pass

# ┌────────────────────────
# │  => IF - Operador Ternario
# └────────────────────────

a = 2
b = 330
print("A") if a > b else print("B")  # -- De una Linea -- Resultado: B

a = 330
b = 330
print("A") if a > b else print("=") if a == b else print("B")  # [=]
