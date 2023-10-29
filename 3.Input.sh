# [Sentencias IF]

# edad=0
# ano=0
# read -p "Ingrese Edad: " edad
# read -p "Ingrese Año: " ano

# if ((edad >=18));then
#     echo "Eres Mayor"
# fi

# INPUT - TEXTO
nombre=""
read -p "Ingrese su Nombre: " nombre


# INPUT - SELECCION

select brand in Samsung Sony iphone symphony Walton; do
    echo "You have chosen $brand"
    break
done


echo "Which Operating System do you like?"
select os in Ubuntu LinuxMint Windows8 Windows7 WindowsXP; do

    case $os in
    "Ubuntu" | "LinuxMint")
        echo "I also use $os."
        break
        ;;

    "Windows8" | "Windows7" | "WindowsXP")
        echo "Why don't you try Linux?"
        break
        ;;

    *)
        echo "Invalid entry."
        break
        ;;
    esac

done
