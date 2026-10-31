email="carlos.andres@ejemplo.com"

# Patrón ERE típico para email simple
patron='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

if [[ $email =~ $patron ]]; then
    echo "Email válido"
else
    echo "Email inválido"
fi

#!/bin/bash

# ============================================
# Ejemplo completo de expresiones regulares
# con [[ ]] y =~ en Bash (ERE)
# ============================================

email="carlos.andres@ejemplo.com"
texto="Usuario: Carlos, Edad: 30"
ip="192.168.1.100"

# --------------------------------------------
# 1. Validar email
# --------------------------------------------
patron_email='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'

if [[ $email =~ $patron_email ]]; then
    echo "✓ Email válido: $email"
else
    echo "✗ Email inválido: $email"
fi

echo

# --------------------------------------------
# 2. Extraer grupos con BASH_REMATCH
# --------------------------------------------
if [[ $texto =~ Usuario:\ ([a-zA-Z]+),\ Edad:\ ([0-9]+) ]]; then
    echo "Nombre capturado : ${BASH_REMATCH[1]}"
    echo "Edad capturada   : ${BASH_REMATCH[2]}"
    echo "Coincidencia total: ${BASH_REMATCH[0]}"
else
    echo "No se encontró el patrón"
fi

echo

# --------------------------------------------
# 3. Validar dirección IP simple
# --------------------------------------------
patron_ip='^([0-9]{1,3}\.){3}[0-9]{1,3}$'

if [[ $ip =~ $patron_ip ]]; then
    echo "✓ IP válida: $ip"
else
    echo "✗ IP inválida: $ip"
fi

echo

# --------------------------------------------
# 4. Ejemplo con alternancia y cantidad
# --------------------------------------------
palabra="colour"

if [[ $palabra =~ colou?r ]]; then
    echo "✓ '$palabra' coincide con colou?r (color o colour)"
fi

if [[ $palabra =~ (cat|dog|colour) ]]; then
    echo "✓ '$palabra' está en la lista de palabras permitidas"
fi
