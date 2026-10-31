#!/bin/bash

frutas=("manzana" "pera" "plátano" "uva")
frutas+=("naranja")

frutas+=("naranja")                # añadir
echo "Primera fruta: ${frutas[0]}" # manzana

echo "Indices: ${!frutas[@]}"
echo "Longitud: ${#frutas[@]}"
echo "Todas: ${frutas[@]}"

# 5. Iterar sobre todos los elementos
for fruta in "${frutas[@]}"; do
  echo "- $fruta"
done

frutas=("manzana" "pera" "plátano" "uva")

# Borrar un elemento específico (ej: "pera" que está en el índice 1)
unset 'frutas[1]'

echo "Indices restantes: ${!frutas[@]}"
# Resultado: Indices restantes: 0 2 3 (El índice 1 queda vacío/hueco)

# Borrar el array por completo
unset frutas

#          ╭──────────────────────────────────────────────────────────╮
#          │                     copia con filtro                     │
#          ╰──────────────────────────────────────────────────────────╯

frutas=("manzana roja" "pera verde" "plátano amarillo")

# Cambiar la palabra "verde" por "madura" en todo el array
frutas_modificadas=("${frutas[@]//verde/madura}")

echo "${frutas_modificadas[@]}"
# Resultado: manzana roja pera madura plátano amarillo
#
#          ╭──────────────────────────────────────────────────────────╮
#          │                     cortar - Extraer                     │
#          ╰──────────────────────────────────────────────────────────╯

frutas=("manzana" "pera" "plátano" "uva" "naranja")

# Salta el índice 0 y toma los siguientes 3 elementos
sub_array=("${frutas[@]:1:3}")

echo "${sub_array[@]}"
# Resultado: pera plátano uva
