#include <iostream>
#include <string>

//          ╭─────────────────────────────────────────────────────────╮
//          │                        Polimorfismo   │
//          ╰─────────────────────────────────────────────────────────╯

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
  void comer(Animal *a) {
    //          ╭─────────────────────────────────────────────────────────╮
    //          │                      polimorfismo                       │
    //          ╰─────────────────────────────────────────────────────────╯
    cout << "Este Animal esta comiendo : " << a->alimento << "... nom nom"
         << endl;
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

//          ╭─────────────────────────────────────────────────────────╮
//          │                    Herencia Multiple                    │
//          ╰─────────────────────────────────────────────────────────╯
class Omnivoro : public Herviboro, public Carnivoro {
public:
  Omnivoro() : Herviboro(), Carnivoro() {}
  void comer() { cout << "Este animal come lo que sea " << endl; }
};

int main(int argc, char *argv[]) {
  Animal *a = new Animal();
  Herviboro *h = new Herviboro();
  Carnivoro *c = new Carnivoro();

  Omnivoro *o = new Omnivoro();

  cout << endl
       << "Numero de animales: " << Animal::obtenerNumeroAnimales() << endl;

  //          ╭─────────────────────────────────────────────────────────╮
  //          │                      polimorfismo                       │
  //          ╰─────────────────────────────────────────────────────────╯
  // a->comer();

  cout << endl << "Herviboro: " << endl;

  h->pastar();
  // h->comer();
  a->comer(h);

  cout << endl << "Carnivoro: " << endl;
  c->cazando();
  // c->comer();
  a->comer(c);

  delete a;

  cout << endl << "Omnivoro: " << endl;

  // debera especificarse al menos hasta que dentro de nuestro
  // sobrescribamos nuestra funcidon
  // o->Herviboro::comer();
  // o->Carnivoro::comer();
  o->comer();

  cout << endl
       << "numero de animales" << Animal::obtenerNumeroAnimales() << endl;

  return 0;
}
