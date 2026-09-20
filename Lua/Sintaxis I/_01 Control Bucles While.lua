
-- while condicion do
--     -- Código a ejecutar
-- end

-- Modo 01
local i = 1

while i <= 3 do
   print("hi")
   i = i + 1
end


-- Modo 02
math.randomseed(os.time())  -- Semilla aleatoria
local numero = math.random(1, 10)
local intento = 0
local adivinado = false

while not adivinado do
    io.write("Adivina un número entre 1 y 10: ")
    intento = tonumber(io.read())  -- Convertir entrada a número
    
    if intento == numero then
        print("¡Correcto! El número era", numero)
        adivinado = true
    else
        print("Incorrecto, intenta de nuevo.")
    end
end

