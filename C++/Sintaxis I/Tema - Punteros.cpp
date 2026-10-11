#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {

  char letra = 'A';
  char *puntero = &letra;

  cout << "VAr: " << endl;

  cout << "&letra ==> " << &letra << endl;
  cout << "*puntero ==> " << *puntero << endl;
  cout << "puntero ==> " << puntero << endl;

  cout << "Conversion: " << endl;

  cout << (int *)&letra << endl;
  cout << *puntero << endl;
  cout << (int *)puntero << endl;

  cout << endl << "==> Numero <==" << endl;

  int num = 10;
  int *punteroNum = &num;

  cout << "&num==> " << &num << endl;
  cout << "*punteroNum ==> " << *punteroNum << endl;
  cout << "punteroNum ==> " << punteroNum << endl;

  cout << "Conversion: " << endl;

  cout << (int *)&num << endl;
  cout << *punteroNum << endl;
  cout << (int *)punteroNum << endl;

  // variable       ==> contenido
  // &variable      ==> Direccion
  //
  // int *puntero = &variable
  //
  // puntero        ==> Direccion
  // * puntero      ==> Contenido

  // ==> Punteros inteligentes
  // ==> es Obligatorio en POO Polimorfismo , Herencias, Abstractas

  return 0;
}
