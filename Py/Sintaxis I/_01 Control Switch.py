# ┌────────────────────────
# │  => IF elif
# └────────────────────────
def mi_switch(variable):
    if variable == 1:
        print("Caso 1")
    elif variable == 2:
        print("Caso 2")
    elif variable == 3:
        print("Caso 3")
    else:
        print("Caso por defecto")


mi_switch(2)  # Salida: Caso 2
mi_switch(4)  # Salida: Caso por defecto
