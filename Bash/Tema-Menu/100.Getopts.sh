while getopts ":m:g:h" opt; do
  case ${opt} in
    m ) echo "Montando main: $OPTARG";;
    g ) echo "Montando github: $OPTARG";;
    h | * ) echo "Uso: script.sh [-m folder] [-g folder]";;
  esac
done
