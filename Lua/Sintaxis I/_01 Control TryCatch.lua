
-- No existe - Requiere Emularse

local function dividir(a, b)
    return a / b
end

local status, result = pcall(dividir, 10, 0)  -- Intentamos dividir por 0

if status then
    print("Resultado:", result)
else
    print("Error capturado:", result)
end
