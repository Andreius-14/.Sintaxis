import abc


# ┌────────────────────────
# │  => Example 01
# └────────────────────────
class Myinterface(abc.ABC):
    @abc.abstractmethod
    def disp():
        pass


# print(" Hello from Myclass ")
class Myclass(Myinterface):
    def disp():
        pass


o1 = Myclass()


# ┌────────────────────────
# │  => Example 02
# └────────────────────────
class FourWheelVehicle(abc.ABC):
    @abc.abstractmethod
    def SpeedUp(self):
        pass


class Car(FourWheelVehicle):
    def SpeedUp(self):
        print("Running! ")


class TwoWheelVehicle(abc.ABC):
    @abc.abstractmethod
    def SpeedUp(self):
        pass


class Bike(TwoWheelVehicle):
    def SpeedUp(self):
        print("Running!.. ")


a = Bike()
s = Car()

print(isinstance(s, FourWheelVehicle))  # True
print(isinstance(a, TwoWheelVehicle))  # True
print(isinstance(a, FourWheelVehicle))  # False
print(isinstance(s, TwoWheelVehicle))  # False
