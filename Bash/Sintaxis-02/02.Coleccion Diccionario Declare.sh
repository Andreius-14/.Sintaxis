#!/bin/bash

# 1. Declarar el array asociativo
declare -A configuracion

# 2. Asignar valores por clave
configuracion["host"]="localhost"
configuracion["puerto"]="8080"
configuracion["usuario"]="admin"

# 3. Consultar por clave
echo "Conectando a ${configuracion["host"]} en el puerto ${configuracion["puerto"]}..."

# 4. Iterar sobre las claves y sus valores
for clave in "${!configuracion[@]}"; do
  echo "$clave = ${configuracion[$clave]}"
done

# 1. Declarar el array asociativo
declare -A capitales

# 2. Asignar valores usando claves de texto
capitales[España]="Madrid"
capitales[Francia]="París"
capitales[Perú]="Lima"

# 3. Acceder a un valor por su clave
echo "La capital de Perú es: ${capitales[Perú]}"
# Resultado: Lima

# 4. Obtener todas las claves (${!array[@]}) y todos los valores (${array[@]})
echo "Países (Claves): ${!capitales[@]}"
echo "Ciudades (Valores): ${capitales[@]}"
