
# Asigna Archivo a la Variable $archivo

seleccionar_archivo() {
  echo "Seleccione el archivo de comandos:"
  select archivo in *; do
    if [ -f "$archivo" ]; then
      echo "Archivo seleccionado: $archivo"
      break
    else
      echo "Error: '$archivo' no se encuentra."
    fi
  done
}

# Leer el archivo línea por línea y ejecutar el comando antes de cada línea
while IFS= read -r linea; do

  # Podemos aplicar Interaccion Por Linea

  echo "$linea"
done < "$archivo"
