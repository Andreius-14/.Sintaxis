--          ╭─────────────────────────────────────────────────────────╮
--          │                   spread / Untable /                    │
--          ╰─────────────────────────────────────────────────────────╯
--
--
local function mostrar(...)
	local argumentos = { ... }

	for i, valor in ipairs(argumentos) do
		print(i, valor)
	end
end

mostrar("Lua", 100, true, "Neovim")

--          ╭─────────────────────────────────────────────────────────╮
--          │                    Multiple retorno                     │
--          ╰─────────────────────────────────────────────────────────╯
local variable_arguments = function(...)
	local arguments = { ... }
	for i, v in ipairs({ ... }) do
		print(i, v)
	end
	return unpack(arguments)
end

print("====================")
print("1:", variable_arguments("hello", "world", "!"))
print("====================")
print("2:", variable_arguments("hello", "world", "!"), "<lost>")
