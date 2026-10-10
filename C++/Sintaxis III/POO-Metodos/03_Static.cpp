
#include <iostream>
#include <string>

using namespace std;

class Persona {

private:
  // Variables
  string nombre;
  int edad;

public:
  static int numero_personas;
  // Constructor
  Persona(string nombre, int edad);
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

  void saludar();
};

int Persona::numero_personas = 0;
void Persona::saludar() {
  cout << "Hola soy " << nombre << " Mi edad es " << edad << endl;
}

Persona::Persona(string nombre, int edad) {
  this->nombre = nombre;
  this->edad = edad;
  numero_personas += 1;
}

int main(int argc, char *argv[]) {

  // Instancia
  Persona *p = new Persona("Diana", 10);
  Persona *p2 = new Persona("Xime", 15);

  cout << "Numero de personas: " << Persona::numero_personas << endl;

  p->establecerNombre("Ximena").establecerEdad(29).establecerNombre("Diana02");
  p->saludar();
  p2->saludar();
  return 0;
}

/*
 * Se define y se accede dede todas las intancias
 * - las variabless statis se definen fuera de la clase
 * */
