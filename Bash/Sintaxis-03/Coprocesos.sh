coproc MI_PROC { comando; }
echo "dato" >&${MI_PROC[1]}
read -u ${MI_PROC[0]} respuesta
