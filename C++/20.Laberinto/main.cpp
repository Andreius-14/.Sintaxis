#include <iostream>

#include "source/GameMap.h"
#include "source/player.h"

using namespace std;

int main(int argc, char *argv[]) {

  bool isGameOver = false;
  GameMap Map;
  Player Hero;

  cout << "Inicia el Juego" << endl;

  Map.DrawIntro();
  while (isGameOver == false) {

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
