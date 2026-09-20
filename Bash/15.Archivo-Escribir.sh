#!/bin/bash
# Insertar texto en un archivo 
# Andreius_14

echo "Escribit archivo"

echo $2 >> $1
cat $1
# Ejemplo de Uso
# ./15.Archivo-Escribir.sh notas.txt "Insercion desde bash"
