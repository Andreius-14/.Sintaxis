#include "Headers/GameMap.h"
#include "Headers/MapCell.h"
#include <cstdlib>
#include <fstream>
#include <iostream>
#include <ostream>
#include <string>

using namespace std;

GameMap::GameMap() {
  //
  PlayerCell = NULL;
  LoadMapFromFile();
  isGameOver = false;
}

void GameMap::Draw() {

  system("clear");
  cout << "Dungeon Map" << endl;

  for (int i = 0; i < 15; i = i + 1) {
    for (int j = 0; j < 10; j = j + 1) {
      cout << " " << cells[i][j].id << " ";
    };
    cout << endl;
  };

  // ...
};

void GameMap::DrawIntro() {

  string line;
  ifstream MyFile("Source/Intro.txt");

  if (MyFile.is_open()) {
    while (getline(MyFile, line)) {
      cout << line << endl;
    }

    cin >> line;

  } else {
    cout << "Error Banner!" << endl;
  }
}

void GameMap::DrawVictory() {

  string line;
  ifstream MyFile("Source/Victory.txt");

  if (MyFile.is_open()) {
    while (getline(MyFile, line)) {
      cout << line << endl;
    }

    cout << "Has Alcanzado la Victoria!" << endl;
    cin >> line;
  }
}

void GameMap::LoadMapFromFile() {

  // ofstream FileCreated("Map.txt");
  //
  // if (FileCreated.is_open()) {
  // }

  string line;
  int row = 0;
  ifstream MyFile("Source/Map.txt");

  if (MyFile.is_open()) {
    cout << "Prueba de dibujo" << endl;
    while (getline(MyFile, line)) {
      for (int p = 0; p < line.length(); p++) {

        if (line[p] == '0') {

          cells[row][p].id = 0;
        } else {

          cells[row][p].id = line[p];
        }
      };
      row++;
    }
    cout << "Final Prueba";

  } else {
    cout << "Error No se abrio el archivo!" << endl;
  }
};

bool GameMap::SetPlayerCell(int PlayerX, int PlayerY) {

  if (cells[PlayerY][PlayerX].isBlocked() == false) {

    if (cells[PlayerY][PlayerX].id == '$') {
      DrawVictory();
      isGameOver = true;
      return true;
    } else {
      if (PlayerCell != NULL) {
        PlayerCell->id = 0;
      }
      PlayerCell = &cells[PlayerY][PlayerX];
      PlayerCell->id = '3';
    };

    return true;
  } else {
    return false;
  }
  // cout << "Ubicacion: x-y : "<< PlayerX << "," << PlayerY;
}

