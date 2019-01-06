class Ball{
  constructor(canvas){
    this.canvas = canvas;
    this.RADIUS = 10;
    this.position = canvas.getStartPosition();
    this.movement = new Movement(0,0)
  }

  isMoving(){
    return this.movement.isMoving();
  }
  createMove(){
    return new BallMove(this.position, this.movement);
  }
  draw(){
    this.canvas.setColor("#0095DD");
    this.canvas.draw().beginPath();
    this.canvas.draw().arc(this.position.getX(), this.position.getY(), this.RADIUS, 0, Math.PI*2);
  //  this.canvas.draw().fillStyle = "#0095DD";
    this.canvas.draw().fill();
    //this.canvas.draw().closePath();
  }
  // Erases the area around the ball current position.
    erase() {
      const buffer = 5;
      this.canvas.draw().clearRect(this.position.getX() - this.RADIUS - buffer,
                                   this.position.getY() - this.RADIUS - buffer,
                                   this.RADIUS * 2 + buffer,
                                   this.RADIUS * 2 + buffer);
    }

  move(movement){
    this.movement = movement;
    this.position.move(movement);
  }
}
