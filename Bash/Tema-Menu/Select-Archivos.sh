__seleccionar_archivo() {
    local carpeta="$1"
    mapfile -t archivos < <(ls -1A "$carpeta")
    # local archivos=($(ls "$carpeta"))

    # Mostrar opciones y permitir selección
    select archivo in "${archivos[@]}"; do
        if [ -n "$archivo" ]; then
            # echo "Seleccionaste el archivo: $archivo"
            echo "$archivo"
            break
        else
            echo "Selección no válida, intenta nuevamente."
        fi
    done
}
