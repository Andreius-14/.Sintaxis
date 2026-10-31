#          ╭──────────────────────────────────────────────────────────╮
#          │                           trap                           │
#          ╰──────────────────────────────────────────────────────────╯
#          - En escuchador
#          - Una alarma
#          - un Trigger
#          - un addeventListener de javascript
#

#          ╭──────────────────────────────────────────────────────────╮
#          │                           Exit                           │
#          ╰──────────────────────────────────────────────────────────╯
## Configuramos el trap para que borre el archivo al salir (EXIT)
# Script Finalizado
#
#
# ──────────────────────────────────────────────────────────────────────
trap 'echo "Saliendo..."; cleanup' EXIT
trap 'echo "Interrumpido"' INT
trap - INT # quitar trap

# ──────────────────────────────────────────────────────────────────────
trap 'rm -f "$TMP_FILE"; echo "Archivo temporal limpiado."' EXIT

# ──────────────────────────────────────────────────────────────────────
# 1. Definimos la función que hará el trabajo sucio
cleanup() {
  echo ""
  echo "Ejecutando limpieza..."
  rm -f /tmp/archivo1.tmp /tmp/archivo2.tmp
  echo "¡Archivos temporales eliminados con éxito!"
}

# 2. Asignamos la función al trap para que se ejecute al salir
trap cleanup EXIT

#          ╭──────────────────────────────────────────────────────────╮
#          │                          SIGINT                          │
#          ╰──────────────────────────────────────────────────────────╯
#
# Ejecucion tras Ctrl + c

# ──────────────────────────────────────────────────────────────────────
## Capturamos la interrupción (Ctrl + C)
trap 'echo -ちは " ¡Hey! Has cancelado el script. Saliendo de forma segura..."; exit 1' SIGINT

#          ╭──────────────────────────────────────────────────────────╮
#          │                        ERR                               │
#          ╰──────────────────────────────────────────────────────────╯

# ──────────────────────────────────────────────────────────────────────
#!/bin/bash
set -e

# Si ocurre un error en cualquier comando, ejecuta este bloque
trap 'echo "¡Error crítico en la línea $LINENO! El script falló."' ERR

echo "Paso 1: Todo bien"
ls /directorio-que-no-existe # <-- Esto fallará y activará el trap
echo "Paso 2: Esto nunca se ejecuta"

# ──────────────────────────────────────────────────────────────────────
# Función para reportar errores con detalles
error_handler() {
  local exit_code=$?
  local line_number=$1
  echo "----------------------------------------"
  echo "❌ ¡ALERTA! El script falló."
  echo "Línea del error: $line_number"
  echo "Código de salida: $exit_code"
  echo "----------------------------------------"
}

# Pasamos $LINENO como argumento a nuestra función cuando salte el ERR
trap 'error_handler $LINENO' ERR

#          ╭──────────────────────────────────────────────────────────╮
#          │                           Data                           │
#          ╰──────────────────────────────────────────────────────────╯

#   Señal / Evento,Cuándo se dispara
# ──────────────────────────────────────────────────────────────────────
#   EXIT,     "Cuando el script termina por cualquier motivo (éxito, error o cancelación)."
#   ERR,      "Cuando cualquier comando dentro del script devuelve un código de error (ideal usarlo con set -e).
#   SIGINT,   "Cuando el usuario presiona Ctrl + C.
#   SIGTERM,  "Cuando el sistema operativo u otro programa le pide al script que se cierre de forma ordenada (es la señal por defecto de kill).
