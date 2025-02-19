
-- CONCATENAR
--
local nombre = "Andreius"
local saludo = "Hola, " .. nombre .. "!"
print(saludo)  -- Salida: Hola, Andreius!

-- INTERPOLACION
--
local nombre = "Andreius"
local edad = 25

local mensaje = string.format("Hola, mi nombre es %s y tengo %d años.", nombre, edad)
print(mensaje)  -- Salida: Hola, mi nombre es Andreius y tengo 25 años.

-- %s → Inserta una cadena de texto.
-- %d → Inserta un número entero.
-- %f → Inserta un número decimal (se puede formatear %.2f para dos decimales).

