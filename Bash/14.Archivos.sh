# file -> mkdir
# archivo -> touch

#!/bin/bash
# Creacion de Archivos y Directorios
# Andreius_14

# echo "Creacion de Directorio"
# mkdir "Hola_mundo"
# touch "primer_archivo"

echo "Creacion de Archivos/Directorios:"
if [[ $1 = "d" ]]; then
  mkdir $2
  echo "--> Directorio Creado"
  elif [[ $1 = "f" ]]; then
    touch $2
    echo "--> Archivo Creado"
fi

# Ejemplo
# ./nameArchivo.sh d nameDirectorio
# ./nameArchivo.sh f nameArchivo
