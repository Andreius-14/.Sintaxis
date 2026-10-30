#!/bin/bash

# Crear una lista dinámica de servidores
set -- "servidor1.com" "servidor2.com" "servidor3.com"

echo "Tienes $# servidores configurados."

for servidor in "$@"; do
    echo "Haciendo ping a $servidor..."
done
