// Represents one ball in the game.
class Ball {

  constructor(canvas) {
    this.canvas = canvas;
    this.RADIUS = 6;

    this.position = canvas.getInitialPosition();
    this.movement = new Movement(0, 0);
  }

  // Returns whether the ball is currently moving.
  // All balls do not necesserily move at the beginning of the game.
  isMoving() { return this.movement.isMoving() }

  // Returns a new BallMove, based on the ball current position, speed and
  // direction.
  createMove() { return new BallMove(this.position, this.movement); }

  // Draws the ball at its current location.
  draw() {
    this.canvas.setColor("#000000" /* red */);
    this.canvas.draw().beginPath();
    this.canvas.draw().arc(this.position.getX(), this.position.getY(), this.RADIUS,
                           /*startAngle=*/0, /*endAngle=*/Math.PI * 2)
    this.canvas.draw().fill();
  }

  // Erases the area around the ball current position.
  erase() {
    const buffer = 5;
    this.canvas.draw().clearRect(this.position.getX() - this.RADIUS - buffer,
                                 this.position.getY() - this.RADIUS - buffer,
                                 this.RADIUS * 2 + buffer,
                                 this.RADIUS * 2 + buffer);
  }

  // Moves the ball using a given speed/direction.
  move(movement) {
    this.movement = movement;
    this.position.move(movement);
  }
}
