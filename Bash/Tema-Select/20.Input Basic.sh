#!/bin/bash
echo "=== 1. ENTRADA DE TEXTO ==="
read -p "Ingrese su Nombre: " nombre
echo "Hola, $nombre. ¡Bienvenido!"
echo ""

# echo "=== 2. SENTENCIA IF (Edad) ==="
# read -p "Ingrese Edad: " edad
# read -p "Ingrese Año: " ano
#
# if ((edad >= 18)); then
#     echo "Eres Mayor de edad."
# else
#     echo "Eres Menor de edad."
# fi
# echo ""
#
# echo "=== 3. MENÚ DE SELECCIÓN (Marcas) ==="
# echo "Elige una marca:"
# select brand in Samsung Sony iphone symphony Walton; do
#     if [ -n "$brand" ]; then
#         echo "You have chosen $brand"
#         break
#     else
#         echo "Opción inválida."
#     fi
# done
# echo ""
#
# echo "=== 4. MENÚ CON CASE (Sistema Operativo) ==="
# echo "Which Operating System do you like?"
# select os in Ubuntu LinuxMint Windows8 Windows7 WindowsXP; do
#     case $os in
#         "Ubuntu" | "LinuxMint")
#             echo "I also use $os."
#             break
#             ;;
#         "Windows8" | "Windows7" | "WindowsXP")
#             echo "Why don't you try Linux?"
#             break
#             ;;
#         *)
#             echo "Invalid entry."
#             ;;
#     esac
# done
