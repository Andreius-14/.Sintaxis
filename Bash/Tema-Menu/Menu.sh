#!/bin/bash
# Los operadores aritméticos: solo se pueden usar con números enteros
opcion=0

calcular_imc() {
	peso=0
	altura=0
	read -p "Ingrese su peso en KG: " peso
	read -p "Ingrese altura en Metros: " altura
	imc=$(echo "scale=2; $peso/($altura * $altura)" | bc)
	echo $imc

  mensaje_imc $imc
  # funcion_prueba $imc
}

mensaje_imc() {
  echo "Procesando Mensaje"

	input=$1

  if  (($(echo "$input < 18.00" | bc))); then
    echo "Peso insuficiente"
  elif (( $(echo "$input >= 18.00 && $input <= 25.00" | bc ) )); then
    echo "Peso Normal"
  elif (( $(echo "$input >= 25.00 && $input <= 27.00" | bc ) )); then
  	echo "Sobre Peso Grado I"   
  elif (( $(echo "$input >= 27.00 && $input <= 30.00" | bc ) )); then
		echo "Sobre Peso Grado II (Pre-Obesidad)"
  elif (( $(echo "$input >= 30.00 && $input <= 35.00" | bc ) )); then
		echo "Obesidad de Tipo I"
  elif (( $(echo "$input >= 35.00 && $input <= 40.00" | bc ) )); then
  		echo "Obesidad de Tipo II"
  elif (( $(echo "$input >= 40.00 && $input <= 50.00" | bc ) )); then
      echo "Obesidad de Tipo III(morbida)"
  else
    echo "Obesidad de Tipo IV (extrema)"
  fi
  
  sleep 2

}

area_figuras_geometricas(){
  figura=""
  base=0
  altura=0
  radio=0
  pi=3.14

  read -p "Seleccione un figura Geometrica (cuadro,triangulo,circulo)" figura

  if [ $figura = "cuadro" ]; then
    read -p "Ingrese la Base del $figura: " base
    read -p "Ingrese la Altura del $figura: " altura
    echo "El area del cuadrado es:" $((base*altura))
  elif [[ $figura = "triangulo" ]]; then
    read -p "Ingrese la Base del $figura: " base
    read -p "Ingrese la Altura del $figura: " altura
    echo "El area del $figura es: "$(((base*altura)/2))
  elif [[ $figura = "circulo" ]]; then
    read -p "Ingrese el Radio: " radio
    area=$(echo "scale=2;$pi*($radio * $radio)" | bc)
    echo "El Area es: $area"
    
  fi
}

operaciones_aritmeticas(){
  operacion=""
  valor_1=0
  valor_2=0

  read -p "Seleccione la Operacion que desea realizar:(Suma, resta, multiplicacion, division): " operacion
  read -p "Introduzca el valor numero 1: " valor_1
  read -p "Introduzca el valor numero 2: " valor_2 

  if [ $operacion = "suma" ]; then
    echo "$valor_1 + $valor_2 = " $((valor_1+valor_2))
  elif [[ $operacion = "resta" ]]; then
    echo "$valor_1 - $valor_2 = " $((valor_1-valor_2))
  elif [ $operacion = "multiplicacion" ] || [ $operacion = "multiplicar" ] ; then
    echo "$valor_1 * $valor_2 = " $((valor_1*valor_2))
  fi
}

while :; do

	#Limpiando Pantalla
	clear
	#Bienvenido/a
	echo "======================================="
	echo "==BIENVEDIO AL PROYECTO GINAL DEL CURSO"
	echo "Seleccione la opcion que desea ejecutar"
	echo "[1] Calcular el IMC"
	echo "[2] Calcular area de Figuras Geometricas"
	echo "[3] Operaciones Aritmeticas"
	echo "[4] Sacame de Aqui"
	read -p "Seleccione la opcion que desea ejecutar [1-4]" opcion
	#Validar la opcion que el usuario selecciono
	case "$opcion" in
	1)
		echo "Calcular IMC"
    calcular_imc
    sleep 4
		;;
	2)
		echo "Calcular Area Figuras Geometricas"
    area_figuras_geometricas
		sleep 2
		;;
	3)
		echo "Operaciones Aritmeticas"
    operaciones_aritmeticas
		sleep 2
		;;
	*)
		echo "Sacando del Programa..."
		sleep 2
		exit 0
		;;
	esac
done
