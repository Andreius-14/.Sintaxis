#include <iostream>

#include <string>

using namespace std;

int main(int argc, char *argv[]) {
  // Defecto
  // char texto[] = {'H', 'O', 'L', 'A'};

  // Facilitado de libreria
  string txt = "Hola mundo";
  string txtnum = "10";
  string txtfloat = "10.5";

  // Metodos de la Libreria String
  cout << "Tamaño ==> " << txt.size() << endl;
  cout << "Entero ==> " << stoi(txtnum) << endl;
  cout << "Flotante ==> " << stof(txtfloat) << endl;
  return 0;
}
