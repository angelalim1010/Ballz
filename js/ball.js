class Ball{
  constructor(canvas){
    this.canvas = canvas;
    this.RADIUS = 10;
    this.position = canvas.getStartPosition();
    this.movement = new Movement(0,0)
  }

  isMoving(){
    return this.Movement.moving();
  }
  draw(){
    this.canvas.beginPath();
    this.canvas.arc(this.position.getX(), this.position.getY(), this.RADIUS, 0, Math.PI*2);
    this.canvas.fillStyle = "#0095DD";
    this.canvas.fill();
    this.canvas.closePath();
  }
  move(movement){
    this.movement = movement;
    this.position.move(movement);
  }
