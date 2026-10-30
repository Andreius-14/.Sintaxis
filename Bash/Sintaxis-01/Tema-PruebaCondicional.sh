if [[ $edad -ge 18 && $nombre == "Ana" ]]; then
    echo "Acceso concedido"
fi

#          ╭──────────────────────────────────────────────────────────╮
#          │                          string                          │
#          ╰──────────────────────────────────────────────────────────╯

# -n "$var" (non-zero): Es verdadera si la variable tiene contenido (su longitud es mayor a 0).

#-z "$var" (zero): Es verdadera si la variable está vacía (longitud 0).

#          ╭──────────────────────────────────────────────────────────╮
#          │                          number                          │
#          ╰──────────────────────────────────────────────────────────╯
# -eq (equal / igual): [ "$a" -eq 5 ]
#
# -ne (not equal / diferente): [ "$a" -ne 5 ]
#
# -gt (greater than / mayor que): [ "$a" -gt 5 ]
#
# -ge (greater or equal / mayor o igual): [ "$a" -ge 5 ]
#
# -lt (less than / menor que): [ "$a" -lt 5 ]
#
# -le (less or equal / menor o igual): [ "$a" -le 5 ]

# Actualmente las flags son reemplazadaso por signos matematicos

# Definimos dos variables numéricas para las pruebas
a=10
b=5

echo "--- PRUEBAS CON NÚMEROS (Signos matemáticos vs Flags) ---"
echo "Variables actuales: a = $a, b = $b"
echo ""

# 1. Igual a
if [[ $a == 10 ]]; then            # [[ $a -eq 10 ]] (-eq = equal)
    echo "✔ a es igual a 10"
fi

# 2. Diferente de
if [[ $b != 10 ]]; then            # [[ $b -ne 10 ]] (-ne = not equal)
    echo "✔ b es diferente de 10"
fi

# 3. Mayor que
if [[ $a > $b ]]; then             # [[ $a -gt $b ]] (-gt = greater than)
    echo "✔ a ($a) es mayor que b ($b)"
fi

# 4. Mayor o igual que
if [[ $a >= 10 ]]; then            # [[ $a -ge 10 ]] (-ge = greater or equal)
    echo "✔ a ($a) es mayor o igual a 10"
fi

# 5. Menor que
if [[ $b < $a ]]; then             # [[ $b -lt $a ]] (-lt = less than)
    echo "✔ b ($b) es menor que a ($a)"
fi

# 6. Menor o igual que
if [[ $b <= 5 ]]; then             # [[ $b -le 5 ]] (-le = less or equal)
    echo "✔ b ($b) es menor o igual a 5"
fi

echo ""
echo "--- PRUEBA COMBINADA CON && ---"
if [[ $a > 5 && $b < 10 ]]; then   # [[ $a -gt 5 && $b -lt 10 ]]
    echo "✔ Ambas condiciones son ciertas (a es mayor a 5 Y b es menor a 10)"
fi


#          ╭──────────────────────────────────────────────────────────╮
#          │                  Archivos y Directorios                  │
#          ╰──────────────────────────────────────────────────────────╯
# -f "archivo.txt": Verifica si existe y es un archivo normal.
#
# -d "mi_carpeta": Verifica si existe y es un directorio (carpeta).
#
# -e "ruta": Verifica si existe (ya sea archivo o carpeta).
#
# -s "archivo.txt": Verifica si existe y no está vacío (pesa más de 0 bytes).
#
# -r, -w, -x: Comprueban si tienes permisos de lectura, escritura o ejecución sobre el archivo.
