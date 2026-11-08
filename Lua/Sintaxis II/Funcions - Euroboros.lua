local function ejecutar(funcion, valor)
	return funcion(valor)
end

local function duplicar(numero)
	return numero * 2
end

print(ejecutar(duplicar, 10)) -- 20
