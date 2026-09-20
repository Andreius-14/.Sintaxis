# ┌────────────────────────
# │  => Basico
# └────────────────────────
try:
    print(x)
except:
    print("Hubo un Error")

# ┌────────────────────────
# │  => Multiple
# └────────────────────────

try:
    print(x)
except NameError:
    print("Variable x is not defined")
except:
    print("Something else went wrong")

# ┌────────────────────────
# │  => Diferentes Tipos de Errores
# └────────────────────────
try:
    print(x)
except ZeroDivisionError:
    print("Something went wrong")
except TypeError:
    print("Error")
except NameError:
    print("Valor Indefinido")
else:
    print("Nothing went wrong")

# ┌────────────────────────
# │  => else - Si try fue Exitoso
# └────────────────────────

try:
    print("Hola Novato")
except ZeroDivisionError:
    print("Something went wrong")
except TypeError:
    print("Error")
except NameError:
    print("Valor Indefinido")
else:
    print("NO Hubo Problema")

# ┌────────────────────────
# │  => finally - Se Ejecuta Siempre
# └────────────────────────

try:
    print(x)
except:
    print("Hubo un Error \n")
finally:
    print("Try except Ha Terminado")
    print("finally Siempre se Ejecuta")
