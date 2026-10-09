#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {

  char letra = 'A';
  char *puntero = &letra;

  cout << "Desnudo: " << endl;

  cout << "&letra ==> " << &letra << endl;
  cout << "*puntero ==> " << *puntero << endl;
  cout << "puntero ==> " << puntero << endl;

  cout << "Conversion: " << endl;

  cout << (int *)&letra << endl;
  cout << *puntero << endl;
  cout << (int *)puntero << endl;
  return 0;
}
