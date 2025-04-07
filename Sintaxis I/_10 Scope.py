# ┌────────────────────────
# │  => SCOPE - I
# └────────────────────────

#  Global
x = "awesome"


def myfunc():
    #  Local
    x = "fantastic"
    print("Python is " + x)


myfunc()  # -- "Python is  fantastic"

print("Python is " + x)  # -- "Python is  awesome" [# No Sobreescribir Global]

# ┌────────────────────────
# │  => SCOPE - II
# └────────────────────────


def myfunc():
    global x  # -- Creacion de Una Variable GLOBAL
    x = "fantastic"


myfunc()

print("Python is " + x)

# ┌────────────────────────
# │  => SCOPE - III
# └────────────────────────

#  Global
x = "awesome"


def myfunc():
    global x  # --Sobreescribir un Variable Global [global]
    x = "fantastic"


myfunc()

print("Python is " + x)

# ┌────────────────────────
# │  => SCOPE - III
# └────────────────────────

x = 300


def myfunc():
    x = 200
    print(x)


myfunc()  # 200

print(x)  # 300

x = 500


def myfunc():
    global x
    x = 300


myfunc()

print(x)  # 300
