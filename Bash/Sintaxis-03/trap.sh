trap 'echo "Saliendo..."; cleanup' EXIT
trap 'echo "Interrumpido"' INT
trap - INT                    # quitar trap
