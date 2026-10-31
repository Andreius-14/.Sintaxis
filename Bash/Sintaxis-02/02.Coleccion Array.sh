#!/bin/bash

# 1. Declarar e inicializar un array
frutas=("manzana" "pera" "plátano" "uva")

# 2. Agregar un elemento al final
frutas+=("naranja")

# 3. Acceder a un elemento por su índice
echo "La primera fruta es: ${frutas[0]}" # manzana

# 4. Obtener la longitud total del array
echo "Total de frutas: ${#frutas[@]}"

# 5. Iterar sobre todos los elementos
for fruta in "${frutas[@]}"; do
    echo "- $fruta"
done

frutas=("manzana" "pera" "uva")
echo ${frutas[0]}
echo ${frutas[@]}           # todos
echo ${#frutas[@]}          # cantidad
frutas+=("naranja")         # añadir
