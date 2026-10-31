#!/bin/bash

# - Si dentro de una función en segundo plano modificas una variable, esa modificación se pierde cuando la tarea termina, porque ocurrió en un subproceso aislado.
# - una forma de saltar esa restriccion es documentos con registros o tuberias

# Una función que simula una tarea pesada
tarea_lenta() {
  local id=$1
  echo "⏳ Iniciando tarea $id..."
  sleep 3 # Simulando trabajo (descarga, proceso, etc.)
  echo "✅ Tarea $id completada."
}

echo "=== INICIO DEL SCRIPT ==="

# Lanzamos las tareas en segundo plano con '&'
tarea_lenta 1 &
tarea_lenta 2 &
tarea_lenta 3 &

# Esperamos a que terminen TODas las tareas en segundo plano
wait

echo "=== TODAS LAS TAREAS FINALIZARON ==="
