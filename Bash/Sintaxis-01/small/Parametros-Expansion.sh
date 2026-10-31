#          ╭──────────────────────────────────────────────────────────╮
#          │  Modificadores y asignaciones condicionales (Parámetros  │
#          │                       por defecto)                       │
#          ╰──────────────────────────────────────────────────────────╯
# ${VARIABLE:-valor}	Si VARIABLE no está definida o está vacía, devuelve valor (sin modificar la variable).
# ${VARIABLE:=valor}	Si VARIABLE no está definida o está vacía, le asigna valor y lo devuelve.
# ${VARIABLE:+valor}	Si VARIABLE está definida y no está vacía, devuelve valor; de lo contrario, devuelve vacío.
#
# Si el usuario no pasa un argumento, usar "guest" por defecto
USUARIO="${1:-guest}"
echo "Bienvenido, $USUARIO"

# Equivalente a: let nombre = process.env.NOMBRE || "Sin nombre";
nombre="${NOMBRE:-Sin nombre}"
web="${WEB:-no tengo web}"

echo "Hola $nombre"
echo "Mi web es $web"

# ${var:-valor}       # si está vacía o no existe → valor por defecto
# ${var:=valor}       # asigna el valor por defecto
# ${var:+valor}       # si existe → usa valor
# ${var:?mensaje}     # error si no existe
# ${#var}             # longitud
# ${var#patrón}       # quita el patrón más corto desde el inicio
# ${var##patrón}      # quita el patrón más largo desde el inicio
# ${var%patrón}       # quita desde el final
# ${var%%patrón}      # quita el más largo desde el final
# ${var/buscar/reemplazar}
# ${var//buscar/reemplazar}   # todas las ocurrencias
#
#
${var:offset}               # subcadena desde offset
${var:offset:length}        # subcadena con longitud
${var,,}                    # minúsculas
${var^^}                    # mayúsculas
${var^}                     # primera letra mayúscula
${!prefijo*}                # variables que empiezan con prefijo
${!array[@]}                # índices del array
