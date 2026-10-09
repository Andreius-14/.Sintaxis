#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {

  cout << "Operadores condicionales" << endl;

  bool resultado_a = true & true;

  bool resultado_b = true || true;

  bool resultado_c = !true;

  cout << resultado_a << endl;
  cout << resultado_b << endl;
  cout << resultado_c << endl;

  cout << "condicionales - If" << endl;

  int edad = 0;
  cin >> edad;

  // Estilo 01
  if (edad >= 18) {

    if (edad <= 40) {

      std::cout << "Puedes Votar" << endl;
    } else {

      std::cout << " NO - Puedes Votar" << endl;
    }

  } else {

    std::cout << " NO - Puedes Votar" << endl;
  }

  // Estilo 02
  if (edad < 18) {
    cout << "No puedes votar" << endl;
  } else if (edad >= 40) {

    cout << "No puedes votar" << endl;
  } else {

    cout << "Vota" << endl;
  }

  return 0;
}

/*
 * El Bool: Respuesta en nuemero  1 0
 * */
