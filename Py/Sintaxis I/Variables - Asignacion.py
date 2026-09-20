# ┌───────────────────────────────────┐
# │         :=                │
# └───────────────────────────────────┘

# --> Permite asignar durante la marcha     
if valor := input("Ingrese un valor: "):
    print(f"Valor ingresado: {valor}")
else:
    print("No se ingresó ningún valor.")

while (linea := input("Ingrese una línea (o 'salir'): ")) != "salir":
    print(f"Línea ingresada: {linea}")

# ┌───────────────────────────────────┐
# │         OR                │
# └───────────────────────────────────┘

valor = None
valor_predeterminado = "Valor predeterminado"
resultado = valor or valor_predeterminado
print(resultado) # Output: Valor predeterminado

valor = None
valor ??= "Valor predeterminado"
print(valor) # Output: Valor predeterminado
