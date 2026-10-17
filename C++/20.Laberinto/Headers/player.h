
#ifndef PLAYER_H // <-- Faltaba la 'n' (if not defined)
#define PLAYER_H

class Player { // <-- 'class' va en minúscula
public:
  Player();
  void CallInput();
  void ResetToSetPosition();
  int x, y;

  int lastX, lastY;

protected:
  // variables protegidas si las necesitas luego

private:
  // variables privadas si las necesitas luego
}; // <-- ¡Importante! El punto y coma al final de la clase

#endif // PLAYER_H
