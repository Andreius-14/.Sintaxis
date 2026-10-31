#          ╭──────────────────────────────────────────────────────────╮
#          │                  Proceso de Sustitucion                  │
#          ╰──────────────────────────────────────────────────────────╯

#          ╭──────────────────────────────────────────────────────────╮
#          │                     output like file                     │
#          ╰──────────────────────────────────────────────────────────╯

# Compara la salida de dos comandos git o servidores sin guardarlos en archivos
diff <(sort lista1.txt) <(sort lista2.txt)

diff <(ls dir1) <(ls dir2)
while read linea; do
  echo "$linea"
done < <(comando)

# <(comando): Trata la salida del comando como un archivo de lectura. (El ejemplo que pusiste con diff).

# >(comando): Trata la salida para enviarla como un archivo de escritura hacia otro comando.
