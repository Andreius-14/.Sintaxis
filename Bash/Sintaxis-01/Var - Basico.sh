#!/bin/bash
# Do: Imprime un hola mundo
# Autor: Andreius_14

#          ╭──────────────────────────────────────────────────────────╮
#          │                        Constantes                        │
#          ╰──────────────────────────────────────────────────────────╯

PI=3.1416
readonly PI

# Si intentas hacer esto más abajo, el script fallará:
PI=3.14 # Error: readonly variable

#          ╭──────────────────────────────────────────────────────────╮
#          │               Asignación básica de valores               │
#          ╰──────────────────────────────────────────────────────────╯
SALUDO="Hola, mundo"
NUMERO=42
OTRO_NUMERO=$NUMERO # Copiando el valor de otra variable No genera Error

#          ╭──────────────────────────────────────────────────────────╮
#          │          Asignación del resultado de un comando          │
#          ╰──────────────────────────────────────────────────────────╯

FECHA_HOY=$(date +%Y-%m-%d)
DIRECTORIO_ACTUAL=$(pwd)

echo "Hoy es $FECHA_HOY en $DIRECTORIO_ACTUAL"

# Clasico

FECHA_HOY=$(date +%Y-%m-%d)
