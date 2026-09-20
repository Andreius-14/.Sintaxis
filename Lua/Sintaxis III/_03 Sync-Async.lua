-- Sincrono
print("Inicio")  
for i = 1, 5 do
    print("Proceso", i)
end
print("Fin")  

-- Inicio
-- Proceso 1
-- Proceso 2
-- Proceso 3
-- Proceso 4
-- Proceso 5
-- Fin



-- Async
-- Usando Librerias Externas
local lanes = require "lanes".configure()

function proceso_lento()
    for i = 1, 5 do
        print("Ejecutando tarea en segundo plano", i)
        os.execute("sleep 1")  -- Simula espera
    end
end

local hilo = lanes.gen("*", proceso_lento)()
print("Esto se ejecuta mientras la otra tarea corre")


--Se pueden usar bibliotecas como LuaSocket y luv (basado en libuv, usado en Node.js) para manejar operaciones asíncronas, como redes y archivos.
--Se puede hacer asincronía con co-rutinas.

function tarea()
    print("Inicio de la tarea")
    coroutine.yield()  -- Pausa la ejecución aquí
    print("Tarea reanudada")
end

local co = coroutine.create(tarea)
coroutine.resume(co)  -- Ejecuta hasta yield()
coroutine.resume(co)  -- Reanuda desde donde se pausó

