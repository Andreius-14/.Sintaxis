nombre="Carlos"
saludo="Hola, mi nombre es $nombre y estoy aprendiendo Bash."
echo "$saludo"
# Resultado: Hola, mi nombre es Carlos y estoy aprendiendo Bash.
#

#          ╭──────────────────────────────────────────────────────────╮
#          │                          llaves                          │
#          ╰──────────────────────────────────────────────────────────╯
#
base="archivo"
# Incorrecto (Bash buscará una variable llamada $base_backup):
# echo "$base_backup.txt" 

# Correcto (Usando llaves para delimitar la variable):
echo "${base}_backup.txt"
# Resultado: archivo_backup.txt
#          ╭──────────────────────────────────────────────────────────╮
#          │                       sin espacios                       │
#          ╰──────────────────────────────────────────────────────────╯
protocolo="https://"
dominio="miscript.sh"
ruta="/admin/login"

url="${protocolo}${dominio}${ruta}"
echo "$url"
# Resultado: https://miscript.sh/admin/login

#          ╭──────────────────────────────────────────────────────────╮
#          │                  Concatenas asignacion                   │
#          ╰──────────────────────────────────────────────────────────╯

mensaje="Error crítico:"
mensaje+=" El disco duro está lleno."
mensaje+=" Revise el espacio."

echo "$mensaje"
# Resultado: Error crítico: El disco duro está lleno. Revise el espacio.
#

#          ╭──────────────────────────────────────────────────────────╮
#          │                         comillas                         │
#          ╰──────────────────────────────────────────────────────────╯

usuario="admin"

echo "Hola $usuario"  # Imprime: Hola admin
echo 'Hola $usuario'  # Imprime: Hola $usuario (literalmente)
