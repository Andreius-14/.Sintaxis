
//          ╭─────────────────────────────────────────────────────────╮
//          │                      * El Guardian                      │
//          ╰─────────────────────────────────────────────────────────╯
//

#include <iostream>
#include <string>

//          ╭─────────────────────────────────────────────────────────╮
//          │                 Constructo - Destructor                 │
//          ╰─────────────────────────────────────────────────────────╯

/* El ciclo de la vidade un objeto*/
/**  Desear Impedir modificar una variablde desde la Instancia
 *
 *
 * */
using namespace std;

class Persona {

private:
  // Variables
  string nombre;
  int edad;

public:
  // Constructor
  Persona(string n, int e) {
    nombre = n;
    edad = e;
  }
  // Destructor
  ~Persona() { cout << "Destructor De " << this->nombre << endl; };
  // Funciones
  void saludar() { cout << nombre << endl; }
};

// Persona ::Persona() {}

// Persona ::~Persona() {}

int main(int argc, char *argv[]) {

  // Instancia
  Persona *p = new Persona("Diana", 10);
  Persona *p2 = new Persona("Ximena", 20);

  p->saludar();
  p2->saludar();

  // Eliminar
  // Limpia memoria
  delete p2;

  return 0;
}
