Menu_Seleccionable() {
    echo "╔════════════════════════════╗ "
    echo "║       MENÚ PRINCIPAL       ║ "
    echo "╚════════════════════════════╝ "
    echo "1) Mostrar Grupos de Archivos"
    echo "2) Montar: Folder Main"
    echo "3) Montar: Folder Github"
    echo "404) Salir"
    echo "========================="
    read -p "Seleccione una opción [1-3]:" Opcion_Elegida
}

# ═══════════════════════════════
#        Menu - Seleccion
# ═══════════════════════════════
while true; do
    Menu_Seleccionable

    # Opcion Elegida
    case "$Opcion_Elegida" in
    1) Mostrar_Grupos ;;
    2) montarCarpetas "${main[@]}" ;;
    3) montarCarpetas "${github[@]}" ;;
    404) __salir ;;
    *) txt_color "Opcion Incorrecta - Elija de Nuevo" green ;;
    esac
done
