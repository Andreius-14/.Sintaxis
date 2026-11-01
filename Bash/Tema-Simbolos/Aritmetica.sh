#          ╭──────────────────────────────────────────────────────────╮
#          │                          $(())                           │
#          ╰──────────────────────────────────────────────────────────╯

# (( resultado = a + b * 2 ))
# echo $(( 5 ** 2 ))          # potencia
# (( contador++ ))
# (( contador += 5 ))

parametro_1=40
parametro_2=10

echo "Parametro_1: $parametro_1 , Parametro_2: $parametro_2"
echo "==========Operadores Aritmeticos=========="

echo "$parametro_1 + $parametro_2 = "$((parametro_1 + parametro_2)) "[Suma]"
echo "$parametro_1 - $parametro_2 = "$((parametro_1 - parametro_2)) "[Resta]"
echo "$parametro_1 * $parametro_2 = "$((parametro_1 * parametro_2)) "[Multiplicacion]"
echo "$parametro_1 / $parametro_2 = "$((parametro_2 / parametro_2)) "[Division]"

echo "==========Operaciones Logicas=========="

echo $((parametro_1 > parametro_2)) #True 1
echo $((parametro_1 < parametro_2)) #false 0

# ==========================================
# 2. ASIGNACIÓN ARITMÉTICA (dentro de (( )) )
# ==========================================
# (( num = 10 ))            # Asignación básica aritmética
# (( num += 5 ))            # Suma y asigna (num = num + 5)
# (( num -= 3 ))            # Resta y asigna (num = num - 3)
# (( num *= 2 ))            # Multiplica y asigna (num = num * 2)
# (( num /= 4 ))            # Divide y asigna (num = num / 4)
# (( num %= 3 ))            # Módulo y asigna (num = num % 3)
# (( num++ ))               # Incrementa en 1 después de usar
# (( ++num ))               # Incrementa en 1 antes de usar
# (( num-- ))               # Decrementa en 1 después de usar
# (( --num ))               # Decrementa en 1 antes de usar
