# variables
num_1=0
num_2=0

read -p "Ingresa un numero: " num_1
read -p "Ingresa un numero: " num_2

#Funcion - Hola Mundo
hola_mundo(){
	#contenido de la función
	echo "Hola mundo"
}

#Funcion - Suma
realizar_suma(){
  numero1=10
  numero2=20
  echo "la suma de $numero1 + $numero2 = " $((numero1 + numero2))
}

#Funcion - Suma y Parametros
suma_Parametros ()
{
  numero1=$1
  numero2=$2
  echo "La suma de $numero1 + $numero2 = "$((numero1 + numero2))
}

echo "======================================"
#Funcion - Intancia
hola_mundo 
realizar_suma
suma_Parametros 200 100
suma_Parametros $num_1 $num_2


# Se debe definir y luego Ejecutar 
# Todas las variables tienen scope global
