# 🌱 Es un conjunto de nombres simbólicos (miembros) vinculados a valores únicos
from enum import Enum


# class syntax
class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3


# functional syntax
Color = Enum("Color", ["RED", "GREEN", "BLUE"])
