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
  Animal *a = new Animal();
  Herviboro *h = new Herviboro();

  Carnivoro *c = new Carnivoro();

  cout << "Numero de animales: " << Animal::obtenerNumeroAnimales() << endl;

  a->comer();
  h->pastar();
  c->cazando();
  delete a;

  cout << "numero de animales" << Animal::obtenerNumeroAnimales() << endl;

  return 0;
}
