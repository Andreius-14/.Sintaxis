#          ╭──────────────────────────────────────────────────────────╮
#          │                  Concatenas asignacion                   │
#          ╰──────────────────────────────────────────────────────────╯

mensaje="Error crítico:"
mensaje+=" El disco duro está lleno."
mensaje+=" Revise el espacio."

echo "$mensaje"
# Resultado: Error crítico: El disco duro está lleno. Revise el espacio.
#

#          ╭──────────────────────────────────────────────────────────╮
#          │                         comillas                         │
#          ╰──────────────────────────────────────────────────────────╯

usuario="admin"

echo "Hola $usuario"  # Imprime: Hola admin
echo 'Hola $usuario'  # Imprime: Hola $usuario (literalmente)


# Es lo mismo que la interpolacion
