#include <iostream>
#include <string>

// ==> Idea
// Eres un dios al crear Clases
//
//
//

// ==> Sobrecarga de Contructor

using namespace std;

class Cat {
public:
  // ==> Variable
  string Name;
  // ==> Contructor
  Cat() { Name = "Guapo"; }
  Cat(string iName) { Name = iName; }

  // ==> funciones
  void Meow() { cout << "Miau Miau" << endl; }
};

class Persona {
public:
  string nombre = "Diana";
  int edad = 28;

  void saludar() { cout << nombre; }
  Persona();
  Persona(Persona &&) = default;
  Persona(const Persona &) = default;
  Persona &operator=(Persona &&) = default;
  Persona &operator=(const Persona &) = default;
  ~Persona();

private:
};

Persona ::Persona() {}

Persona ::~Persona() {}

int main(int argc, char *argv[]) {

  Persona *p = new Persona();

  Persona *p2 = new Persona();

  p2->nombre = "Ximena";

  p->saludar();
  p2->saludar();

  //

  return 0;
}
