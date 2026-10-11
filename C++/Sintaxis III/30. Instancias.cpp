

#include <iostream>
#include <string>

using namespace std;

struct Persona {
  string nombre;
  int edad;
};

int main(int argc, char *argv[]) {

  // // Lista de characeteres
  // char texto[] = "hola";
  // char texto1[] = {'h', 'o', 'l', 'a'};
  // char *texto2 = (char *)"hola";

  // ╭─────────────────────────────────────────────────────────╮
  // │                       Instancias                        │
  // ╰─────────────────────────────────────────────────────────╯

  // ==> separa espacio desde el principio
  // ==> accesp con .

  Persona p = Persona();

  p.nombre = "Diana";
  p.edad = 26;

  // ==> Output

  cout << "nombre : " << p.nombre << endl;
  cout << "Edad: " << p.edad << endl;

  // ╭─────────────────────────────────────────────────────────╮
  // │                       Instancias -- Punteros           │
  // ╰─────────────────────────────────────────────────────────╯

  // ==> Separa espacia en el Momento
  // ==> Acceso con ->

  Persona *p1 = new Persona();

  p1->nombre = "Juan";
  p1->edad = 18;

  // ==> Output

  cout << "nombre : " << p1->nombre << endl;
  cout << "Edad: " << p1->edad << endl;
  return 0;
}

/*Una lista de caraceteres
 *
 * "\0"   lo usa ya saber donde termina la cadena
 *
 * */
