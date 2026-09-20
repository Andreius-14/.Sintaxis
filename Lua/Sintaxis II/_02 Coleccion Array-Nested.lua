
-- Nested lists
-- Array Anidado
local data = {
    { "sid", 20 },
    { "tim", 90 },
}

for i = 1, #data do
  print(data[i][1] .. " is " .. data[i][2] .. " years old")
end

-- Nested dictionaries
local data = {
    sid = { age = 20 },
    tim = { age = 90 },
}
