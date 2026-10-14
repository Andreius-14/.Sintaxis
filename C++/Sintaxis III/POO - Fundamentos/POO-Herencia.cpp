//

#include <iostream>
#include <string>

//          ╭─────────────────────────────────────────────────────────╮
//          │                        Herencia                         │
//          ╰─────────────────────────────────────────────────────────╯

// Temas abarcados
// - protecter
// - reutilizacion de un cornstructor dentro de una herencia

using namespace std;

class Mage {
protected:
  int mana, hp, power;

public:
  Mage(int iMana, int iHP, int iPower) {
    mana = iMana;
    hp = iHP;
    power = iPower;
  }
  void Spell() { cout << "Fireworks: Nivel " << power << endl; }
};

// => Herencia :
//  se debe heredar el contructor explicitamente
//  convertir los private => protecter si seran heredaodos
class IceMage : public Mage {
public:
  IceMage(int iMana, int iHP, int iPower) : Mage(iMana, iHP, iPower) {
    mana = iMana;
    hp = iHP;
    power = iPower + 10;
  }
};

class Animal {
protected:
  static int numero_animales;
  string alimento;

public:
  Animal();
  ~Animal();
  static int obtenerNumeroAnimales();
  string obtenerAlimento() { return alimento; }
  void comer() {
    cout << "Este Animal esta comiendo" << alimento << "... nom nom" << endl;
  }
};

int Animal::numero_animales = 0;

Animal::Animal() {
  cout << "Creando nuevo animal " << endl;
  numero_animales += 1;
}

Animal::~Animal() {
  std::cout << "Borrando animal" << endl;
  numero_animales -= 1;
}

int Animal::obtenerNumeroAnimales() { return numero_animales; }

class Herviboro : public Animal {
public:
  Herviboro() : Animal() { this->alimento = "plantas"; }
  void pastar() { cout << "Estea animal esta pastando" << endl; }
};

class Carnivoro : public Animal {
public:
  Carnivoro() : Animal() { this->alimento = "Carne"; }
  void cazando() { cout << "Estea animal esta Cazando" << endl; }
};

int main(int argc, char *argv[]) {

  // ==> Animal
  // ──────────────────────────────────────────────────────────────────────
  Animal *a = new Animal();
  Herviboro *h = new Herviboro();

  Carnivoro *c = new Carnivoro();

  cout << "Numero de animales: " << Animal::obtenerNumeroAnimales() << endl;

  a->comer();
  h->pastar();
  c->cazando();
  delete a;

  cout << "numero de animales" << Animal::obtenerNumeroAnimales() << endl;

  // Mago
  // ──────────────────────────────────────────────────────────────────────
  Mage Gandalf(100, 10, 20);
  IceMage Sauruman(100, 10, 20);

  Gandalf.Spell();
  Sauruman.Spell();

  return 0;
}
