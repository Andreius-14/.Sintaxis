#!/bin/bash


mes=""
echo "======================================"
read -p "Ingrese el Nombre del Mes: " mes

echo "======================================"

case "$mes" in
  "enero") echo mes 1
  ;;
  "febrero") echo mes 2
  ;;
  *) echo mes 3-14
  ;;
esac
exit 0
