#!/bin/bash

# Muestra una ventana de menú interactiva
OPCION=$(whiptail --title "Menú Principal" --menu "Elige una opción:" 15 60 4 \
"1" "Mostrar Grupos de Archivos" \
"2" "Montar Folder Main" \
"3" "Montar Folder Github" \
"4" "Salir" 3>&1 1>&2 2>&3)

case $OPCION in
    1) echo "Seleccionaste 1" ;;
    2) echo "Seleccionaste 2" ;;
    3) echo "Seleccionaste 3" ;;
    4) echo "Saliendo..." ;;
es:c
