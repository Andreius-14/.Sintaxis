
#include "./Headers/player.h"
#include <iostream>

using namespace std;

Player::Player() {
  x = 1;
  y = 1;
} // <-- Corregido: era PLayer (con L mayúscula)

void Player::CallInput() {
  char UserInput = ' ';

  cout << "Brujula awds" << endl;
  cin >> UserInput;

  switch (UserInput) {
  case 'w':
    lastY = y;
    y -= 1;
    break;
  case 's':
    lastY = y;
    y += 1;
    break;
  case 'd':
    lastX = x;
    x += 1;
    break;
  case 'a':
    lastX = x;
    x -= 1;
    break;
  default:
    cout << "Selecciona W-S-A-D" << endl;
  }
}

void Player::ResetToSetPosition() {
  x = lastX;
  y = lastY;
}
