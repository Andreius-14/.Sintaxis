#include <iostream>
#include <iterator>

using namespace std;

int main(int argc, char *argv[]) {

  // Variables
  // sin espacios
  // sin caracteres espacion
  // Numero
  int edad = 0;
  edad = 18;

  // Lista - char
  // char: no usar "" solo ''
  char letra = 'A';

  // constantes
  const char letraB = 'B';

  // Lista
  // - son supremacistas solo aceptan iguales

  int lista_edades[] = {1, 2, 3, 4, 5};

  // caracteristica salto de linea
  // iostream
  // << endl

  cout << "Basicos" << endl;
  cout << edad << endl;
  cout << letra << endl;
  cout << letraB << endl;

  cout << "Listas:" << endl;
  cout << lista_edades[1];
  return 0;
}
