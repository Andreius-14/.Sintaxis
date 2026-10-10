
#include <iostream>
#include <string>

//          ╭─────────────────────────────────────────────────────────╮
//          │                 Constructo - Destructor                 │
//          ╰─────────────────────────────────────────────────────────╯

/* El ciclo de la vidade un objeto*/

using namespace std;

class Persona {
public:
  // Variables
  string nombre;
  int edad;

  //          ╭─────────────────────────────────────────────────────────╮
  //          │                       Constructor                       │
  //          ╰─────────────────────────────────────────────────────────╯
  Persona(string n) { nombre = n; }
  // Persona(Persona &&) = default;
  // Persona(const Persona &) = default;
  // Persona &operator=(Persona &&) = default;
  // Persona &operator=(const Persona &) = default;
  //          ╭─────────────────────────────────────────────────────────╮
  //          │                       Destructor                        │
  //          ╰─────────────────────────────────────────────────────────╯
  ~Persona() { cout << "Destructor De " << this->nombre << endl; };
  //
  // Funciones
  void saludar() { cout << nombre << endl; }

private:
};

// Persona ::Persona() {}

// Persona ::~Persona() {}

int main(int argc, char *argv[]) {

  // Instancia
  Persona *p = new Persona("Diana");
  Persona *p2 = new Persona("Ximena");

  p->saludar();
  p2->saludar();

  // Eliminar
  // Limpia memoria
  delete p2;

  return 0;
}
