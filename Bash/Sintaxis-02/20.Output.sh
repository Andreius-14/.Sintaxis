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



#          ╭──────────────────────────────────────────────────────────╮
#          │                     BRACE EXPANSION                      │
#          ╰──────────────────────────────────────────────────────────╯

# Syntax: {<START>..<END>}

# Print numbers 1-100.
echo {1..100}

# Print range of floats.
echo 1.{1..9}

# Print chars a-z.
echo {a..z}
echo {A..Z}

# Nesting.
echo {A..Z}{0..9}

# Print zero-padded numbers.
# CAVEAT: bash 4+
echo {01..100}

# Change increment amount.
# Syntax: {<START>..<END>..<INCREMENT>}
# CAVEAT: bash 4+
echo {1..10..2} # Increment by 2.
