
#include <iostream>
#include <string>

using namespace std;

int main(int argc, char *argv[]) {

  union numero_letra {
    int numero;
    char letra;
  };

  numero_letra x = {'A'};

  cout << "x como numero" << x.numero << endl;
  cout << "x como numero" << x.letra << endl;

  cout << "x convertido: " << (char)x.numero << endl;
  cout << "x convertido: " << (int)x.letra << endl;

  //          ╭─────────────────────────────────────────────────────────╮
  //          │                          enum                           │
  //          ╰─────────────────────────────────────────────────────────╯

  // asigna un numero al conetndio empieza en 0
  //
  enum dias_semana { lunes, martes, miercoles };
  dias_semana dia = martes;

  cout << dia;

  enum days { lun = 'l', mart = 'm', mier = 'x' };

  days d = mart;

  cout << d;
  return 0;
}

/* Union
 * Genera variables personalizadas
 * Permite la conversion de variables
 * */

/**
 * Enum
 *  - las palabras sin asignacion . se le asgina numeros segun su orden
 *  - Se instancia de forma normla basicamente
 *
 * *
 * */
