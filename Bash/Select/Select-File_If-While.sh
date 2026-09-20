# Solicitar nombre del archivo
echo "Ingrese el nombre del archivo de comandos:"
read archivo

# Verificar si el archivo existe
if [ -f "$archivo" ]; then
  # Leer el archivo línea por línea
  while IFS= read -r line; do
    # Ejecutar la función para cada línea
    # ejecutar_comando "$line"
  done < "$archivo"
else
  # Mostrar error si el archivo no existe
  echo "Error: El archivo '$archivo' no se encuentra."
fi
