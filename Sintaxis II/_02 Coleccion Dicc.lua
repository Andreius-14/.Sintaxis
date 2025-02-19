
local info = { 
   name = "sid",
   age = 20,
   isAlive = true
}


-- Anidado 
local data = {
    { name = "sid", score = 20 },
    { name = "tim", score = 90 },
}

print(data[1].name)  -- "sid"
print(data[2].score) -- 90
-- both print sid
print(info["name"])
print(info.name)

-- Loop by pairs
for key, value in pairs(info) do
   print(key .. " " .. tostring(value))
end

-- prints name sid, age 20 etc
