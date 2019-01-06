// Represents a position on the board, measured from top-left corner.
class Position {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Getters
  getX() { return this.x; }
  getY() { return this.y; }

  // Moves the position by a given delta.
  move(movement) {
    this.x += movement.getDx();
    this.y += movement.getDy();
  }
}
