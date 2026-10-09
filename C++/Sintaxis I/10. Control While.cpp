#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
  while (true) {
    // ==> variable
    char respuesta = 'o';
    // ==> Input
    cout << "Desear terminar ?" << endl;
    cin >> respuesta;

    // ==> logica
    if (respuesta == 'y') {
      cout << "bye bye";
      break;
    }
  }

  // do {
  //   // ==> variable
  //   char respuesta = 'o';
  //   // ==> Input
  //   cout << "Desear terminar ?" << endl;
  //   cin >> respuesta;
  //
  //   // ==> logica
  //   if (respuesta == 'y') {
  //     cout << "bye bye";
  //     break;
  //   }
  //
  // } while (true);

  return 0;
}
