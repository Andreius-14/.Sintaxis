
// Un acronimo

// => A.C.A.L.O
/*
 * Aritmetico
 * Comparacion == < < <= >=
 * Asignacion ==> = +=  -= *= /= ++ --
 * Logico ==> && || !
 * Otros        sizeof << >>
 * */

#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {

  int a = 2;
  int b = 3;

  int c = a + b;
  c += 1;
  bool d = a < b;
  bool e = a < b;

  cout << "Resultados" << endl;
  cout << c << endl;
  cout << a + b << endl;

  cout << "Resultados - Boleanos" << endl;
  cout << d << endl;
  cout << e << endl;

  cout << "Resultados - Especiales" << endl;
  int edades[] = {24, 40, 7};

  // Tamaño ocupado
  cout << sizeof(a) << endl;
  cout << sizeof(edades) << endl;

  // Tamaño de un obsjeto dentro de un array
  cout << sizeof(edades) / sizeof(edades[0]);

  return 0;
}

/*
 * El Bool: Respuesta en nuemero  1 0
 * */
