#          ╭──────────────────────────────────────────────────────────╮
#          │                        coprocesos                        │
#          ╰──────────────────────────────────────────────────────────╯
#          - pequeños addevenlistener
#          - pequeños demonios
#          - pequeños en tiempo real
#          - Un Input/Output en tiempo real
#
#          - Si entra sale, no guarda registro
#          - si salio ya no vuelve a salir se vacio
coproc MI_PROC { comando; }
echo "dato" >&${MI_PROC[1]}
read -u ${MI_PROC[0]} respuesta

# ──────────────────────────────────────────────────────────────────────

# 1. Abrimos el coproceso con la calculadora
coproc CALC { bc; }

# 2.  INPUT --- Le mandamos una operación por su canal de escritura
echo "10 + 5" >&${CALC[1]}

# 3.  OUTPUT --- Leemos el resultado desde su canal de lectura y lo guardamos
read -u ${CALC[0]} resultado
echo "El resultado 1 es: $resultado" # Imprimirá: 15

# 4. ¡El proceso sigue vivo! Le mandamos otra operación diferente
echo "100 / 4" >&${CALC[1]}

# 5. Volvemos a leer la respuesta en tiempo real
read -u ${CALC[0]} resultado
echo "El resultado 2 es: $resultado" # Imprimirá: 25

# 6. Cerramos la calculadora mandándole un comando de salida
echo "quit" >&${CALC[1]}
# ──────────────────────────────────────────────────────────────────────
#
#
# Un read por output
#
## 1. Envias input
echo "10 + 5" >&${CALC[1]}

# 2. PRIMER READ: Lee el "15" y lo saca de la tubería. (¡Éxito!)
read -u ${CALC[0]} res1

# 3. SEGUNDO READ: El tubo está VACÍO.
# Tu script SE CONGELA AQUÍ esperando a que bc vuelva a hablar.
read -u ${CALC[0]} res2
