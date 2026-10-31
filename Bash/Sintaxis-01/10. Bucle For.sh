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

for num in ${ListadoNumeros[*]}; do
  echo "Numeros Iterados $numeroUsuario * $num = " $((numeroUsuario * num)) #Interpolacion
done

exit 0

#          ╭──────────────────────────────────────────────────────────╮
#          │                          array                           │
#          ╰──────────────────────────────────────────────────────────╯

# Iterar sobre una lista de strings
for fruta in manzana pera sandía plátano; do
  echo "Me gusta la: $fruta"
done

colores=("rojo" "verde" "azul")

for color in "${colores[@]}"; do
  echo "Color actual: $color"
done

#          ╭──────────────────────────────────────────────────────────╮
#          │                          Rangos                          │
#          ╰──────────────────────────────────────────────────────────╯

for i in {1..5}; do
  echo "Contando: $i"
done

for i in {1..10}; do
  echo "$i"
done

# Con paso
for i in {1..10..2}; do
  echo "$i"
done

# Saltando intermitente
# ──────────────────────────────────────────────────────────────────────
limite=5
for i in $(seq 1 $limite); do
  echo "Número: $i"
done

#          ╭──────────────────────────────────────────────────────────╮
#          │                        Estilo C++                        │
#          ╰──────────────────────────────────────────────────────────╯
#
# Sintaxis: (( inicialización; condición; incremento ))
for ((i = 1; i <= 3; i++)); do
  echo "Iteración número: $i"
done

#          ╭──────────────────────────────────────────────────────────╮
#          │                     Parametros Scrit                     │
#          ╰──────────────────────────────────────────────────────────╯

# Si ejecutas el script como: ./script.sh archivo1.txt archivo2.txt
for arg; do
  echo "Procesando el argumento: $arg"
done
