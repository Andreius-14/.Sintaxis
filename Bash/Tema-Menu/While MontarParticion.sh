#!/bin/bash

Menu_Seleccionable() {
    echo "╔════════════════════════════╗ "
    echo "║       MENÚ PRINCIPAL       ║ "
    echo "╚════════════════════════════╝ "
    echo "1) Mostrar Informacion [Particiones]"
    echo "2) Empezar Proceso: Montar una Particion por Defecto"
    echo "3) Salir"
    echo "========================="
    read -p "Seleccione una opción [1-3]:" Opcion_Elegida
}

msm_RutaMontaje() {
    txt_color "\n¿Dónde deseas montar la partición?" cyan
    echo "╭───────────────────────────────────────────────╮"
    echo "│   • media: Para montajes automáticos del      │"
    echo "│     sistema, usados por entornos gráficos.    │"
    echo "│     Ej: /media/usuario o /run/media/usuario   │"
    echo "│     (Mas Popular)                             │"
    echo "│                                               │"
    echo "│   • mnt: Para montajes manuales o temporales. │"
    echo "│     Común en servidores, scripts, o WSL.      │"
    echo "│     (Mas Tecnico no aparece en Biblioteca)    │"
    echo "│                                               │"
    echo "╰───────────────────────────────────────────────╯"
}
#======================================
# [MENU DE SELECCION]
#======================================

while true; do
    Menu_Seleccionable

    # Opcion Elegida
    case "$Opcion_Elegida" in
    1)  ;;
    2)  ;;
    3) __salir ;;
    *) txt_color "Opcion Incorrecta - Elija de Nuevo" green ;;
    esac
done
