-- ════════════════════════════════
-- 1️⃣ Función Simple
-- ════════════════════════════════
function saludar()
	print("Hola, mundo!")
end

saludar() -- Llamada a la función

-- ════════════════════════════════
-- 2️⃣ Función con Parámetros
-- ════════════════════════════════
function sumar(a, b)
	return a + b
end

resultado = sumar(5, 3)
print(resultado) -- 8

-- ════════════════════════════════
-- 3️⃣ Función con Valores Predeterminados
-- ════════════════════════════════
function saludar(nombre)
	nombre = nombre or "Invitado"
	print("Hola, " .. nombre .. "!")
end

saludar("Juan") -- Hola, Juan!
saludar() -- Hola, Invitado!

-- ════════════════════════════════
-- 4️⃣ Función Anónima Variable
-- ════════════════════════════════
doblar = function(x)
	return x * 2
end

print(doblar(4)) -- 8

-- ════════════════════════════════
-- 5️⃣ Función como Parámetro (Funciones de Orden Superior)
-- ════════════════════════════════
function aplicarOperacion(func, x, y)
	return func(x, y)
end

multiplicar = function(a, b)
	return a * b
end

print(aplicarOperacion(multiplicar, 4, 5)) -- 20

-- ════════════════════════════════
-- 6️⃣ Función con Número Variable de Argumentos (`...`)
-- ════════════════════════════════
function sumarTodos(...)
	local suma = 0
	for _, v in ipairs({ ... }) do
		suma = suma + v
	end
	return suma
end

print(sumarTodos(1, 2, 3, 4, 5)) -- 15

-- ════════════════════════════════
-- 7️⃣ Funciones como Métodos en Objetos
-- ════════════════════════════════
persona = {
	nombre = "Carlos",
	edad = 25,

	saludar = function(self)
		print("Hola, soy " .. self.nombre)
	end,
}

persona:saludar() -- Hola, soy Carlos
