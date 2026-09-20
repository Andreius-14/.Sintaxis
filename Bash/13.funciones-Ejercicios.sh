#!/bin/bash

numero1=0
numero2=0
numeros=({1..10})

read -p "Ingresa un numero: " numero1
read -p "Ingresa un numero: " numero2

area_rectangulo ()    
{
  echo "El area del ractangulo con valores $numero1 y $numero2 = " $((numero1*numero2))
}

es_mayor ()
{
  if [[ $numero1 -gt $numero2 ]]; then
      echo "el $numero1 es el Mayor"
    else
      echo "el $numero2 es el Mayor"
  fi
}

tablas_de_multiplicar ()
{
  for num in ${numeros[*]}
  do
    echo "$num * $numero1 = " $((num*numero1))
  done
}

area_rectangulo
es_mayor
tablas_de_multiplicar
