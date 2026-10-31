#!/bin/bash

#          ╭──────────────────────────────────────────────────────────╮
#          │         El "Modo Estricto" (set -euo pipefail):          │
#          ╰──────────────────────────────────────────────────────────╯
# - Un script escrito por un principiante suele ser frágil: si un comando falla, el script sigue ejecutándose como si nada y puede romper cosas en silencio. Los desarrolladores avanzados exigen que los scripts sean defensivos. Usar la combinación estricta obliga a manejar los errores explícitamente y evita que fallos ocultos pasen desapercibidos.
# - Nos evita las mentiras peligrosas
# - Detiene script ante errores silenciosas
#

#          ╭──────────────────────────────────────────────────────────╮
#          │          Depuración profunda (set -x / set -v):          │
#          ╰──────────────────────────────────────────────────────────╯
#Cuando un script automatizado falla en un servidor de producción y no tienes una interfaz visual, activar el rastreo detallado con set -x para ver exactamente en qué línea y con qué variables falló el proceso es una técnica clave de resolución de problemas (troubleshooting).

# El chismoso (set -x)
# ──────────────────────────────────────────────────────────────────────
# - Muestra en terminal lo que va a ejecutar
# - las variables se ven mas visuales contrario a (set -v)

#!/bin/bash
set -x # Muestra cada línea en la terminal antes de ejecutarla

NOMBRE="Carlos"
EDAD=30

if [ $EDAD -gt 18 ]; then
  echo "$NOMBRE es mayor de edad."
fi

#          ╭──────────────────────────────────────────────────────────╮
#          │      Manipulación avanzada de argumentos (set --):       │
#          ╰──────────────────────────────────────────────────────────╯
# - Sobreescribe los parametros $1 $2 $3 ...
# -
# -
# -

# ──────────────────────────────────────────────────────────────────────
#!/bin/bash

echo "Argumentos originales: $1 y $2"

set -- "manzana" "pera" "uva"

echo "Ahora el primer argumento es: $1"
echo "Ahora el segundo es: $2"
echo "Y en total hay $# argumentos"

# ──────────────────────────────────────────────────────────────────────
#!/bin/bash

set -- "servidor1.com" "servidor2.com" "servidor3.com"

echo "Tienes $# servidores configurados."

for servidor in "$@"; do
  echo "Haciendo ping a $servidor..."
done
