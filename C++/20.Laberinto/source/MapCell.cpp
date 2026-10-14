#include "MapCell.h"
MapCell::MapCell() { id = 0; }

bool MapCell::isBlocked() {
  if (id == '1') {
    return true;
  } else {
    return false;
  }
}
// No puede llevar el tipo de variable que es
