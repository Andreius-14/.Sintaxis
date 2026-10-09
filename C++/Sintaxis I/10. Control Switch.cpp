
#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {

  // variable
  int option = 0;

  // IMPUT
  cout << "Introduce una opcion" << endl;
  cin >> option;

  // Condicional
  switch (option) {
  case 1:
    cout << "opcion 1";
    break;
  case 2:
    cout << "opcion 2";
    break;
  default:
    cout << "ESTO NO EXISTE";
  }
  return 0;
}

/*
 * El Bool: Respuesta en nuemero  1 0
 * */
