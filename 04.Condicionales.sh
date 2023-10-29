 edad=0
 ano=0
 read -p "Ingrese Edad: " edad
 read -p "Ingrese Año: " ano

 # Sentencia IF
 if (($edad >=18));then
     echo "Eres Mayor"
 fi

if [[ $edad -ge 18 ]]; then
  echo "Eres Mayor"
fi

if [ $edad -ge 18 ] && [ $ano -eq 2020 ]; then
  echo "Puedes Sufragar"
fi

# Sentencia IF ELSE
 if (($edad >=18));then
     echo ">> Eres Mayor"
   else
    echo ">>No Eres una persona mayor de Edad"
 fi

if [[ $edad -ge 18 ]]; then
  echo ">>Eres Mayor"
  else
    echo ">>No Eres Mayor"
fi

if [ $edad -ge 18 ] && [ $ano -eq 2020 ]; then
  echo ">>Puedes Sufragar"
  else
    echo ">>No puedes Sufragar"
fi

