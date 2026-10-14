
// => La Herencia y sobreescritura de una funcion

#include <iostream>
#include <string>

using namespace std;

// => La Herencia y sobreescritura de una funcion
class Mage {
public:
  // Mage() = default;
  // Mage(Mage &&) = default;
  // Mage(const Mage &) = default;
  // Mage &operator=(Mage &&) = default;
  // Mage &operator=(const Mage &) = default;
  // ~Mage() = default;
  Mage(int BasePower, int BaseHP) {
    Power = BasePower;
    hp = BaseHP;
  }
  float Damage() { return Power; }
  void GetDamage(int Value) {
    hp -= Value;
    cout << "Vida Restante: " << hp << endl;
  }
  void PrintHP() { cout << "❤️:" << hp << endl; }
  void PrintPower() { cout << "⚔️: " << Power << endl; }
  void data() {

    this->PrintHP();
    this->PrintPower();
  }

private:
protected:
  int Power, hp;
};

class IceMage : public Mage {
public:
  IceMage(int BasePower, int BaseHP) : Mage(BasePower, BaseHP) {
    Power = BasePower + 1;
    hp = BaseHP;
  }
};
class FireMage : public Mage {
public:
  FireMage(int BasePower, int BaseHP) : Mage(BasePower, BaseHP) {
    Power = BasePower;
    hp = BaseHP + 10;
  }
};
int main(int argc, char *argv[]) {
  // Instancia de Clase Padre
  Mage *CurrentMage;

  // Personajes
  FireMage Gandalf(10, 10);
  IceMage Dumbledore(10, 10);

  cout << "==> Inicio" << endl;

  cout << "Gandalf: " << endl;
  Gandalf.data();
  cout << "Dumbledore: " << endl;
  Dumbledore.data();

  CurrentMage = &Gandalf;
  CurrentMage->GetDamage(1);

  CurrentMage = &Dumbledore;
  CurrentMage->GetDamage(5);

  cout << "==> Inicio" << endl;

  Gandalf.PrintHP();
  Dumbledore.PrintHP();

  return 0;
}
