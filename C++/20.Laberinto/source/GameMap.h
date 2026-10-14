#ifndef GAMEMAP_H
#define GAMEMAP_H
#include "MapCell.h"

class GameMap {
public:
  GameMap();

  MapCell *PlayerCell;
  MapCell cells[15][10];

  void Draw();
  bool SetPlayerCell(int PlayerX, int PlayerY);

  void DrawIntro();
  void LoadMapFromFile();

protected:
private:
};

#endif // !GAMEMAP_H
