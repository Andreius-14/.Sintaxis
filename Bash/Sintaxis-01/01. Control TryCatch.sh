

# sa
#
# - Solo se puede Emular
#

# Ejecutar un comando
comando_que_puede_fallar

if [ $? -eq 0 ]; then
    echo "Éxito: El comando se ejecutó correctamente"
else
    echo "Error (Catch): Ocurrió un fallo al ejecutar el comando"
fi

# try && ok || catch
comando_que_puede_fallar && echo "Éxito" || echo "Ocurrió un error"
