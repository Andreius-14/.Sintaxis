REGEX='^([_0-9a-zA-Z\-]+)\.([_0-9a-zA-Z\-]+)'

# Ejecucion ./NameArchivo ParamtroArchivoNombre

# Ruta -- Archivo a Variable
if [[ -z "$1" ]]; then
    list_file=`realpath "extensions.txt"`
else
    list_file=`realpath "$1"`
fi

# Verifica Existencia
if [ -f $list_file ]; then
    echo "File $list_file exists."
else
    echo "File $list_file does not exist."
    return
fi
