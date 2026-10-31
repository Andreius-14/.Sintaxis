#          ╭──────────────────────────────────────────────────────────╮
#          │                         trycatch                         │
#          ╰──────────────────────────────────────────────────────────╯
#
# - Solo se puede Emular
# - el $? se sobreescibre facil asi que cuidado

# Ejecutar un comando
comando_que_puede_fallar
#
# Basico
# ──────────────────────────────────────────────────────────────────────

if [ $? -eq 0 ]; then
  echo "Éxito: El comando se ejecutó correctamente"
else
  echo "Error (Catch): Ocurrió un fallo al ejecutar el comando"
fi

#
# Visual
# ──────────────────────────────────────────────────────────────────────

if (($? == 0)); then
  command ...
else
  # este comando sobrecribe el $?
  :
fi

#
# Oneline
# ──────────────────────────────────────────────────────────────────────

# try && ok || catch
comando_que_puede_fallar && echo "Éxito" || echo "Ocurrió un error"

# Extra
# ──────────────────────────────────────────────────────────────────────
# El "Try"
comando_que_puede_fallar
codigo_error=$? # Guardamos el código de salida al instante

# El "Catch"
if ((codigo_error == 0)); then
  echo "Éxito: El comando se ejecutó correctamente"
else
  echo "Error (Catch): Ocurrió un fallo (Código: $codigo_error)"
  # Aquí manejas el error (rollback, salir, etc.)
fi
