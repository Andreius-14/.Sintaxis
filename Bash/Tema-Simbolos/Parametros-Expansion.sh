#          ╭──────────────────────────────────────────────────────────╮
#          │                          Basico                          │
#          ╰──────────────────────────────────────────────────────────╯
# ${var:-valor}       # Defecto --- si está vacía o no existe → valor por defecto
# ${var:=valor}       # Defecto --- asigna el valor por defecto
# ${var:+valor}       # Alternatica --- si existe → usa valor

# ${variable:?error_msg}   # Detiene el script y muestra error si la variable está vacía

# Equivalente a: let nombre = process.env.NOMBRE || "Sin nombre";
#
# - Si la variable existe --- Usar
# - Si no existe --- usa esta
#
nombre="${NOMBRE:-Sin nombre}"
web="${WEB:-no tengo web}"

echo "Hola $nombre"
echo "Mi web es $web"

#          ╭──────────────────────────────────────────────────────────╮
#          │                          String                          │
#          ╰──────────────────────────────────────────────────────────╯

# ${var:?mensaje}     # error si no existe
# ${#var}             # longitud
# ${var#patrón}       # quita el patrón más corto desde el inicio
# ${var##patrón}      # quita el patrón más largo desde el inicio
# ${var%patrón}       # quita desde el final
# ${var%%patrón}      # quita el más largo desde el final
# ${var/buscar/reemplazar}
# ${var//buscar/reemplazar}   # todas las ocurrencias

# ${var:offset}               # subcadena desde offset
# ${var:offset:length}        # subcadena con longitud

# Input
# ──────────────────────────────────────────────────────────────────────
read -p "Deseas llevar un helado? si/no " opcion
echo ""

# ${opcion,,}  Minuscula
# ${opcion^^}  Mayuscula
# ${opcion^}   Mayuscula - First
# ${opcion,}   Minuscula - First

miniscula=${opcion,,}
MAYUSCULA=${opcion^^}
First_Mayuscula=${opcion^}
First_Minuscula=${opcion,}

echo "Minuscula ==> $miniscula
Mayuscula ==> $MAYUSCULA
F-Mayuscula ==> $FirstLetter_Mayuscula
F-Minuscula ==> $FirstLetter_Minuscula "

#          ╭──────────────────────────────────────────────────────────╮
#          │                          Array                           │
#          ╰──────────────────────────────────────────────────────────╯

# ${!prefijo*} # variables que empiezan con prefijo
# ${!array[@]} # índices del array
#
# ${#array[@]} # length
# ${array[@]} # todas los elementos
