#include <iostream>
using namespace std;

// Funciones
int suma(int a, int b) { return a + b; }
int multiplicar(int a, int b = 2) { return a * b; }

// Corazon
int main(int argc, char *argv[]) {
  cout << suma(2, 200) << endl;
  cout << multiplicar(2, 200) << endl;
  cout << multiplicar(2) << endl;
  return 0;
}

/*
 * features
 * declarar el tipo de Funciones
 * puede tener variables predeterminadas
 * */
