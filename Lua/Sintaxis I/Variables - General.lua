--          ╭─────────────────────────────────────────────────────────╮
--          │                   vaerdadero y Falso                    │
--          ╰─────────────────────────────────────────────────────────╯
--           ssolo (nil y false) equivalen a dfalse
--           0 == true
--           {}  == true

local x = 10 -- number
local name = "sid" -- string
local isAlive = true -- boolean
local a = nil --no value or invalid value

-- increment in numbers
local n = 1
n = n + 1
print(n) -- 2

--          ╭─────────────────────────────────────────────────────────╮
--          │                         strings                         │
--          ╰─────────────────────────────────────────────────────────╯
-- Concatenate strings
local phrase = "I am"
local name = "Sid"

-- Variable Multilineaa
local name1 = [[Sid

value
value
]]
print(name1)
--

print(phrase .. " " .. name) -- I am Sid
print("I am " .. "Sid")

-- Juego
--
print("Somos:" .. "\n<><<<<>>>><>" .. "\n:somoS")

--          ╭─────────────────────────────────────────────────────────╮
--          │                   Multiple Asignacion                   │
--          ╰─────────────────────────────────────────────────────────╯

local trueth, lues = true, false
