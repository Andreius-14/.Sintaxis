#          ╭──────────────────────────────────────────────────────────╮
#          │                          break                           │
#          ╰──────────────────────────────────────────────────────────╯
#
select archivo in *; do
  if [ -f "$archivo" ]; then
    echo "Procesando archivo..."
    # ... tu bucle while aquí ...
    break # <--- Aquí rompes el select y el script finaliza
  fi
done

#          ╭──────────────────────────────────────────────────────────╮
#          │                         continue                         │
#          ╰──────────────────────────────────────────────────────────╯
while IFS= read -r line; do
  # Si la línea está vacía, salta a la siguiente línea ignorando el resto
  [ -z "$line" ] && continue

  echo "Línea con contenido: $line"
done <"$archivo"
