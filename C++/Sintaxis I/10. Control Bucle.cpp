#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {

  // variables
  int lista[] = {100, 200, 300};

  // manual lengt
  int tamaño = sizeof(lista) / sizeof(lista[0]);

  int limite = 0;

  // Input
  cout << "Ingresa el limite: " << endl;
  cin >> limite;

  // Bucle
  cout << "For - Basico" << endl;
  for (int i = 0; i < 5; i++) {
    cout << i << endl;
  }

  cout << "For - Input" << endl;
  for (int i = 1; i <= limite; i++) {
    cout << i * 2 << endl;
  }

  cout << "For - Se rompre si te sobrepasas " << endl;
  for (int i = 0; i <= limite; i++) {
    cout << lista[i] << endl;
  }

  cout << "For - Recorre todo el array" << endl;
  for (int i = 0; i <= tamaño; i++) {
    cout << lista[i] << endl;
  }

  return 0;
}

/**
 *  palabra clave dentro de for
 *  break;  irrumpe el bucle y lo termina
 *
 * */
