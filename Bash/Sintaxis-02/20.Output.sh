#          ╭──────────────────────────────────────────────────────────╮
#          │                          Basico                          │
#          ╰──────────────────────────────────────────────────────────╯

echo "Hola, mundo"
echo -e "Línea 1\nLínea 2" # Interpreta el salto de línea en Bash

#          ╭──────────────────────────────────────────────────────────╮
#          │                       Profesional                        │
#          ╰──────────────────────────────────────────────────────────╯

# Formato estructurado
printf "Hola, %s. Tienes %d mensajes.\n" "Carlos" 5

# Imprimir sin salto de línea automático (a diferencia de echo)
printf "Escribe algo: "

#          ╭──────────────────────────────────────────────────────────╮
#          │                      Tipo de Datos                       │
#          ╰──────────────────────────────────────────────────────────╯

frutas=("manzana" "pera")
# Muestra cómo está declarada y estructurada la variable
declare -p frutas
