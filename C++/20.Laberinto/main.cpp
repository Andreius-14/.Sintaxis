#include <iostream>

#include "Headers/GameMap.h"
#include "Headers/player.h"

using namespace std;

int main(int argc, char *argv[]) {

  GameMap Map;
  Player Hero;

  cout << "Inicia el Juego" << endl;

  Map.DrawIntro();
  Map.Draw();

  while (Map.isGameOver == false) {

    Hero.CallInput();
    if (Map.SetPlayerCell(Hero.x, Hero.y)) {
      Map.Draw();
    } else {
      Hero.ResetToSetPosition();
      Map.Draw();
    }
  }
  return 0;
}
