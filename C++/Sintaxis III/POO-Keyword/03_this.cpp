#include <iostream>
#include <string>

using namespace std;

class Persona {

private:
  // Variables
  string nombre;
  int edad;

public:
  // Constructor
  Persona(string nombre, int edad) {
    this->nombre = nombre;
    this->edad = edad;
  }
  // Destructor
  ~Persona() { cout << "Destructor De " << this->nombre << endl; };
  // Funciones
  //
  // Un return requiere pasos previos
  Persona &establecerNombre(string nombre) {
    this->nombre = nombre;
    return *this;
  }
  Persona &establecerEdad(int edad) {
    this->edad = edad;
    return *this;
  }

  void saludar() {
    cout << "Hola soy" << nombre << "Mi edad es" << edad << endl;
  }
};

int main(int argc, char *argv[]) {

  // Instancia
  Persona *p = new Persona("Diana", 10);

  p->establecerNombre("Ximena").establecerEdad(29).establecerNombre("Diana02");
  p->saludar();
  return 0;
}

// Autoreferemcia y desanbiguedad

//          ╭─────────────────────────────────────────────────────────╮
//          │                          this                           │
//          ╰─────────────────────────────────────────────────────────╯
//          permite asignar nombres en construstor
//          ayuda en la creacion de funciones
