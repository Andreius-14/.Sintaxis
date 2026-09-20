# ┌───────────────────────────────────┐
# │        Herencia Multiple          │
# └───────────────────────────────────┘
class Nadador:
    def nadar(self):
        print("Nadando...")


class Corredor:
    def correr(self):
        print("Corriendo...")


class Triatleta(Nadador, Corredor):
    def entrenar(self):
        super().nadar()
        super().correr()
        print("También haciendo bicicleta...")


deportista = Triatleta()
deportista.entrenar()
deportista.nadar()
deportista.correr()


# ┌───────────────────────────────────┐
# │        Herencia Multiple          │
# └───────────────────────────────────┘
class Figura:
    def area(self):
        pass


class Geometria:
    def perimetro(self):
        pass


class Cuadrado(Figura, Geometria):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4
