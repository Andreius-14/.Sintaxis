
// #include <cstdio>
#include <iostream>

// Guardar datos en archivos.
#include <fstream>
#include <string>

using namespace std;

int main(int argc, char *argv[]) {
  // crear archivo
  fstream MyFile("GameData.txt");
  string PlayerName = "";
  if (MyFile.is_open()) {
    MyFile << "Hola Platzi: " << endl;
    MyFile << "Mi nombre es: " << endl;
    MyFile << "Ery" << endl;

    cout << "Introduce el nombre de tu heroe" << endl;
    cin >> PlayerName;
  } else {
  cout << "fallo al insertar" << endl;
  }

  MyFile.close();

  ifstream MyFileRead("GameData.txt");

  string line;
  string NombreDelHeroe = "";

  int Renglon = 0;

  if (MyFileRead.is_open()) {
    while (getline(MyFileRead, line)) {
      if (Renglon == 2) {
        NombreDelHeroe = line;
      }
      Renglon = Renglon + 1;
    }
  } else {

    cout << "no se logro abrir el archivo" << endl;
  }

  cout << "Bienvenida a tu aventura" << endl;
  return 0;
}
