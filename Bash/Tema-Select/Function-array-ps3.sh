__SeleccionaOpcion() {
    local opciones=("$@")        # Captura todas las opciones en un array
    PS3="Selecciona un Numero: " # Mensaje del prompt

    select opcion in "${opciones[@]}"; do
        if [[ -n $opcion ]]; then
            echo "$opcion" # Imprime la opción seleccionada
            break          # Sale del select
        else
            __Error "Opción inválida, intenta de nuevo."
        fi
    done
}
