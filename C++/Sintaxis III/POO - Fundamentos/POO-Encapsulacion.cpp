
// ==> Encapsulamiento

#include <iostream>
#include <string>

using namespace std;

class Dog {
public:
  Dog(string Name, string BarkType) {
    mName = Name;
    mBark = BarkType;
  }
  // ==> Encapsulamiento
  string GetName() { return mName; }
  void SetName(string NewName) { mName = NewName; }
  void Bark() { cout << mBark << endl; }

private:
  string mName;
  string mBark;
};

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

  // ==> Prueba - Dog

  Dog PerroUno("foofers", "berk");
  PerroUno.SetName("Poopy");

  Dog PerroDos("Comodoro", "woof");

  PerroUno.Bark();
  PerroDos.Bark();

  // ==> Prueba - Persona

  // // Instancia
  // Persona *p = new Persona("Diana", 10);
  // Persona *p2 = new Persona("Ximena", 20);
  //
  // p->saludar();
  // p2->saludar();
  //
  // // Eliminar
  // // Limpia memoria
  // delete p2;
  //
  return 0;
}

//          ╭─────────────────────────────────────────────────────────╮
//          │                      * El Guardian                      │
//          ╰─────────────────────────────────────────────────────────╯
//
//// ╭─────────────────────────────────────────────────────────╮ ─────
// │                 Constructo - Destructor                 │
// ╰─────────────────────────────────────────────────────────╯
//
/* El ciclo de la vidade un objeto*/
/**  Desear Impedir modificar una variablde desde la Instancia
 *
 *
 * */
