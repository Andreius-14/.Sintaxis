
n=0
i=1
c=1
read -p "Ingrese numero para determinar si es primo: " n

# Determina Cantidad de DIvidendos
while [[ $i -le $n ]]; do
  i=$(expr $i + 1)
  r=$(expr $n % $i)

  if [[ $r -eq 0 ]]; then
    c=$(expr $c + 1)
  fi
done

# Mensaje Final
if [[ $c -eq 2 ]]; then
  echo "El Numero Es Primo"
  else
    echo "El Numero No Es Primo"
fi

exit 0
