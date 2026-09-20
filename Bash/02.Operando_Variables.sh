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



