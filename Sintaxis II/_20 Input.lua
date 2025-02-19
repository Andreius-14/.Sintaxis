
-- Leer una línea de texto
io.write("¿Cuál es tu nombre? ")
nombre = io.read()  -- Captura la entrada del usuario
print("Hola, " .. nombre .. "!")

-- Leer un número
io.write("Ingresa tu edad: ")
edad = tonumber(io.read())  -- Convertir el input a número
print("Tienes " .. edad .. " años.")
