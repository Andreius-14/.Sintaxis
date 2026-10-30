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
