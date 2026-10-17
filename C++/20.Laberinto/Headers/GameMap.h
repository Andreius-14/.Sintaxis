#ifndef GAMEMAP_H
#define GAMEMAP_H
#include "MapCell.h"

class GameMap {
public:
  bool isGameOver = false;
  GameMap();

  MapCell *PlayerCell;
  MapCell cells[15][10];

  void Draw();
  void DrawIntro();
  void DrawVictory();

  bool SetPlayerCell(int PlayerX, int PlayerY);

protected:
  void LoadMapFromFile();

private:
};

#endif // !GAMEMAP_H
