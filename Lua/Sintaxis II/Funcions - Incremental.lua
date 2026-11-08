local function contador()
	local numero = 0

	return function()
		numero = numero + 1
		return numero
	end
end

local incrementar = contador()

print(incrementar()) -- 1
print(incrementar()) -- 2
print(incrementar()) -- 3
