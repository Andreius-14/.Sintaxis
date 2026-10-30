#!/bin/bash
# Do: Imprime un hola mundo
# Autor: Andreius_14

parametro_1=40
parametro_2=10

echo "Parametro_1: $parametro_1 , Parametro_2: $parametro_2"
echo "==========Operadores Aritmeticos=========="

echo "$parametro_1 + $parametro_2 = "$((parametro_1+parametro_2)) "[Suma]"
echo "$parametro_1 - $parametro_2 = "$((parametro_1-parametro_2)) "[Resta]"
echo "$parametro_1 * $parametro_2 = "$((parametro_1*parametro_2)) "[Multiplicacion]"
echo "$parametro_1 / $parametro_2 = "$((parametro_2/parametro_2)) "[Division]" 

echo "==========Operaciones Logicas=========="

echo $((parametro_1>parametro_2))   #True 1
echo $((parametro_1<parametro_2))   #false 0


#          ╭──────────────────────────────────────────────────────────╮
#          │                        Constantes                        │
#          ╰──────────────────────────────────────────────────────────╯

PI=3.1416
readonly PI

# Si intentas hacer esto más abajo, el script fallará:
PI=3.14  # Error: readonly variable

#          ╭──────────────────────────────────────────────────────────╮
#          │               Asignación básica de valores               │
#          ╰──────────────────────────────────────────────────────────╯
SALUDO="Hola, mundo"
NUMERO=42
OTRO_NUMERO=$NUMERO  # Copiando el valor de otra variable

#          ╭──────────────────────────────────────────────────────────╮
#          │          Asignación del resultado de un comando          │
#          ╰──────────────────────────────────────────────────────────╯

FECHA_HOY=$(date +%Y-%m-%d)
DIRECTORIO_ACTUAL=$(pwd)
echo "Hoy es $FECHA_HOY en $DIRECTORIO_ACTUAL"

# Clasico 

FECHA_HOY=`date +%Y-%m-%d`


