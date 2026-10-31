#          ╭──────────────────────────────────────────────────────────╮
#          │     Variables especiales del sistema (Predefinidas)      │
#          ╰──────────────────────────────────────────────────────────╯
# El shell te asigna automáticamente variables de control que puedes usar en cualquier momento:


# $0: El nombre del script actual.
#
# $1, $2, ...: Los argumentos pasados al script en la línea de comandos.
#
# $#: La cantidad de argumentos pasados.
#
# $?: El código de salida del último comando ejecutado (0 si fue bien, distinto de 0 si falló).
#
# $$: El ID de proceso (PID) actual del script.
#
# $USER: El nombre del usuario que ejecuta el script.

$0          # nombre del script
$1, $2...   # argumentos
$#          # cantidad de argumentos
$@          # todos los argumentos (separados)
$*          # todos los argumentos (como un solo string)
$?          # código de salida del último comando
$$          # PID del script actual
