
# Compara la salida de dos comandos git o servidores sin guardarlos en archivos
diff <(sort lista1.txt) <(sort lista2.txt)

diff <(ls dir1) <(ls dir2)
while read linea; do
    echo "$linea"
done < <(comando)
