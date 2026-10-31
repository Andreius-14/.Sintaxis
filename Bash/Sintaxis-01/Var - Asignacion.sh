


# En Bash, los operadores lógicos 
# && (AND)  
# || (OR) se usan principalmente para ejecutar comandos de forma condicional basándose en si el comando anterior tuvo éxito (exit code 0) o falló.
#
# ==========================================
# 1. ASIGNACIÓN BÁSICA Y LITERAL
# ==========================================
variable="valor"          # Asigna una cadena o texto
variable=10               # Asigna un valor numérico
variable=$((5 + 5))       # Asigna el resultado de una operación aritmética

# ==========================================
# 2. ASIGNACIÓN ARITMÉTICA (dentro de (( )) )
# ==========================================
(( num = 10 ))            # Asignación básica aritmética
(( num += 5 ))            # Suma y asigna (num = num + 5)
(( num -= 3 ))            # Resta y asigna (num = num - 3)
(( num *= 2 ))            # Multiplica y asigna (num = num * 2)
(( num /= 4 ))            # Divide y asigna (num = num / 4)
(( num %= 3 ))            # Módulo y asigna (num = num % 3)
(( num++ ))               # Incrementa en 1 después de usar
(( ++num ))               # Incrementa en 1 antes de usar
(( num-- ))               # Decrementa en 1 después de usar
(( --num ))               # Decrementa en 1 antes de usar

# ==========================================
# 3. CONCATENACIÓN Y ACUMULACIÓN DE TEXTO
# ==========================================
texto="Hola"
texto+=" Mundo"           # Concatena al final (texto pasa a ser "Hola Mundo")

# ==========================================
# 4. EXPANSIÓN DE PARÁMETROS (Asignación condicional)
# ==========================================
# (Se usan entre llaves ${ })
${variable:-defecto}     # Usa "defecto" temporalmente si está vacía (no la modifica)
${variable:=defecto}     # Asigna "defecto" permanentemente si está vacía
${variable:+alternativo} # Usa "alternativo" solo si la variable YA tiene un valor
${variable:?error_msg}   # Detiene el script y muestra error si la variable está vacía
