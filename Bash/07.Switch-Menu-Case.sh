# Heladeria
opcion=""
precio=0

read -p "Deseas llevar un helado? si/no " opcion

pedido=${opcion,,}

if [ $opcion == "si" ]; then
	precio=2
	echo "Toppings:
		1. OREO: 1 euro.
		2. KITKAT: 2 euros.
		3. BROWNIE: 2 euros.
		4. LACASITOS: 3 euros.
		5. SIN TOPPING"

	read -p "Elige el topping segun su numero: 1-5 " opcion
	case $opcion in
		1) echo "Se ha agregado el topping de OREO +1 euro."
			precio=$((precio+1));;
		2) echo "Se ha agregado el topping de KITKAT +2 euros."
			precio=$((precio+2));;
		3) echo "Se ha agregado el topping de BROWNIE +2 euros."
			precio=$((precio+2));;
		4) echo "Se ha agregado el topping de LACASITOS +3 euros."
			precio=$((precio+3));;
		5) echo "Un helado al natural, como Dios manda.";;
		*) echo "No se ha encontrado el topping que buscas.";;
	esac
	
	echo "El total a pagar es ${precio} euros, gracias!"
else
	echo ":("
fi
