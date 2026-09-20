-- Modo [01]
require("path")

-- Modo [02]
require("abc")

-- Modo [03]
local name = require "name"

-- for example in ~/.config/nvim/lua , all dirs and files are accessable via require
-- Do note that all files in that lua folder are in path!
-- ~/.config/nvim/lua/abc.lua
-- ~/.config/nvim/lua/abc/init.lua

-- both do the same thing
