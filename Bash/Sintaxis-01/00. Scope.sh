#!/bin/sh

#          ╭──────────────────────────────────────────────────────────╮
#          │            1.  Globales por Defecto                      │
#          ╰──────────────────────────────────────────────────────────╯

# - Cuando se crea la variables ahi es global 

mi_funcion() {
    MENSAJE="Hola desde la función" # Se declara aquí
}

echo "$MENSAJE" # Imprime vacío porque aún no se ha ejecutado la función

mi_funcion
echo "$MENSAJE" # Imprime "Hola desde la función" (¡es global!)

#          ╭──────────────────────────────────────────────────────────╮
#          │               2. El Scope en las Funciones               │
#          ╰──────────────────────────────────────────────────────────╯
mi_funcion() {
    local VARIABLE_LOCAL="Soy invisible fuera"
    echo "$VARIABLE_LOCAL"
}

#          ╭──────────────────────────────────────────────────────────╮
#          │       3. Scope en Subshells ((...) o Pipelines |)        │
#          ╰──────────────────────────────────────────────────────────╯
CONTADOR=10
echo "Antes: $CONTADOR"

# Esto se ejecuta en un subshell debido a los paréntesis
(
    CONTADOR=99
    echo "Dentro del subshell: $CONTADOR"
)

# El valor original no cambia
echo "Después: $CONTADOR" # Imprime 10, no 99
