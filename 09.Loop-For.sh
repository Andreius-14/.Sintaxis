
ListadoNumeros=(1 2 3 4 5 6 7 8 9)
ListadoNombres=(Diego Juan Rosa Mauro)
ListadoConjunto=({1..100} {A..Z})

numeroUsuario=0
# Acceso a Zona del Array
echo "Datos del listado de Numeros: " ${ListadoNumeros[*]}
echo "Nombre Mauro del Listado Nombre: " ${ListadoNombres[3]}
echo "Datos del Listado Conjunto: " ${ListadoConjunto[*]}

echo "=============================================="

# TABLA DE MULTIPLICAR
read -p "Ingrese un numero: " numeroUsuario

for num in ${ListadoNumeros[*]}
do
  echo "Numeros Iterados $numeroUsuario * $num = " $((numeroUsuario*num)) #Interpolacion
done

exit 0
