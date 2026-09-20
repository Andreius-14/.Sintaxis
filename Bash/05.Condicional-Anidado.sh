nota1=0
nota2=0
nota3=0
promedio=0

read -p "ingrese la Primera nota: " nota1
read -p "ingrese la Segunda nota: " nota2
read -p "ingrese la Tercera nota: " nota3

promedio=$(((nota1+nota2+nota3)/3))
echo "==============================="
echo "El promedio es: " $promedio

if [[ $promedio -ge 7 ]]; then
  echo "Estudiante Promocionado"
  else
  if [ $promedio -gt 4 ] && [ $promedio -le 6]; then
    echo "Estudiante regular"
  else
    echo "Estudiante reprobado"
  fi
fi
