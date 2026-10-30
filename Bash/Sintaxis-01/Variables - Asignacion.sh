# Equivalente a: let nombre = process.env.NOMBRE || "Sin nombre";
nombre="${NOMBRE:-Sin nombre}"
web="${WEB:-no tengo web}"

echo "Hola $nombre"
echo "Mi web es $web"


# En Bash, los operadores lógicos 
# && (AND)  
# || (OR) se usan principalmente para ejecutar comandos de forma condicional basándose en si el comando anterior tuvo éxito (exit code 0) o falló.
