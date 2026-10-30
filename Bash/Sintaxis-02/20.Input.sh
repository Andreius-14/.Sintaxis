# INPUT - TEXTO
nombre=""
read -p "Ingrese su Nombre: " nombre

echo "=== 1. ENTRADA DE TEXTO ==="
read -p "Ingrese su Nombre: " nombre
echo "Hola, $nombre. ¡Bienvenido!"
echo ""

echo "=== 2. SENTENCIA IF (Edad) ==="
read -p "Ingrese Edad: " edad
read -p "Ingrese Año: " ano

if ((edad >= 18)); then
  echo "Eres Mayor de edad."
else
  echo "Eres Menor de edad."
fi
echo ""
