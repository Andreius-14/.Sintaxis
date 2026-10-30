#!/bin/bash
# Menu de Opciones - Selecciona Archivo
echo "Seleccione el archivo de comandos:"

select archivo in *; do

  # Verificar si el archivo existe
  if [ -f "$archivo" ]; then
    echo "Existe"

    # Lectura Lineas
    while IFS= read -r line; do
      # Ejecutar la función para cada línea
      # ejecutar_comando "$line"
      echo "$line"
    done <"$archivo"

  else
    # Mostrar error si el archivo no existe
    echo "Error: El archivo '$archivo' no se encuentra."
  fi
done
