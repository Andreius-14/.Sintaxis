#          ╭──────────────────────────────────────────────────────────╮
#          │                          llaves                          │
#          ╰──────────────────────────────────────────────────────────╯
#
#           - Requiere de doble comilla


nombre="Carlos"

saludo_Basico="Hola, mi nombre es $nombre y estoy aprendiendo Bash."
saludo_Seguro="Hola, mi nombre es ${nombre} y estoy aprendiendo Bash."

echo "$saludo_Basico"
echo "$saludo_Seguro"

#
#          ╭──────────────────────────────────────────────────────────╮
#          │                       sin espacios                       │
#          ╰──────────────────────────────────────────────────────────╯

# - Para unir nombres es mejor lo seguro

protocolo="https://"
dominio="miscript.sh"
ruta="/admin/login"

url="${protocolo}${dominio}${ruta}"
echo "$url"
# Resultado: https://miscript.sh/admin/login
base="archivo"
echo "${base}_backup.txt"
# Resultado: archivo_backup.txt

