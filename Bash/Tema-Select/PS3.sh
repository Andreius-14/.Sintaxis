PS3="Elige una opción (número): "
select opt in "Opción A" "Opción B" "Salir"; do
    case $opt in
        "Opción A") echo "Elegiste A";;
        "Opción B") echo "Elegiste B";;
        "Salir") break;;
        *) echo "Opción inválida";;
    esac
done


