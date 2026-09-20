local frutas = { "Manzana", "Pera", "Naranja" }

for i, fruta in ipairs(frutas) do
    print(i, fruta)
end
-- Salida:
-- 1 Manzana
-- 2 Pera
-- 3 Naranja



local persona = { nombre = "Andreius", edad = 25, ciudad = "Lima" }

for clave, valor in pairs(persona) do
    print(clave, valor)
end
-- Salida:
-- nombre Andreius
-- edad 25
-- ciudad Lima

