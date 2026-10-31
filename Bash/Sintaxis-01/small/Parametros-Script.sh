#          ╭──────────────────────────────────────────────────────────╮
#          │                   variables de control                   │
#          ╰──────────────────────────────────────────────────────────╯
#          - La variables se optienes al usuario pasarlas explicitamente fuera del script 
#          - tambien al llamar a una funcion y el codigo pasa parametros 

# Si el usuario no pasa un argumento, usar "guest" por defecto
USUARIO="${1:-guest}"
echo "Bienvenido, $USUARIO"

$0          # nombre del script
$1, $2...   # argumentos
$@          # todos los argumentos (separados)
$*          # todos los argumentos (como un solo string)

$#          # cantidad de argumentos

#          ╭──────────────────────────────────────────────────────────╮
#          │                           Data                           │
#          ╰──────────────────────────────────────────────────────────╯

$?          # código de salida del último comando (0 si fue bien, distinto de 0 si falló).
$$          # PID del script actual


#          ╭──────────────────────────────────────────────────────────╮
#          │                   Variables de Entorno                   │
#          ╰──────────────────────────────────────────────────────────╯

$USER       # Nombre del usuario que ejecuta el script
$HOME       # Directorio home del usuario
$PATH       # Rutas de búsqueda de comandos
$PWD        # Directorio actual
