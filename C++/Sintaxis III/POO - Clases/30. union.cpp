#include <iostream>
#include <string>

using namespace std;

int main(int argc, char *argv[]) {

  //          ╭─────────────────────────────────────────────────────────╮
  //          │                          union                          │
  //          ╰─────────────────────────────────────────────────────────╯
  union numero_letra {
    int numero;
    char letra;
  };

  numero_letra x = {'A'};

  cout << "x como numero" << x.numero << endl;
  cout << "x como letra" << x.letra << endl;

  cout << "x convertido: " << (char)x.numero << endl;
  cout << "x convertido: " << (int)x.letra << endl;

  return 0;
}

/* Union
 * Genera variables personalizadas
 * Permite la conversion de variables
 * */
