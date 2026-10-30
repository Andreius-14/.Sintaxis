opcion=$(printf "1) Mostrar Grupos\n2) Montar Main\n3) Montar Github\n4) Salir" | fzf --height=5 --header="Selecciona una opción")

echo "Elegiste: $opcion"
