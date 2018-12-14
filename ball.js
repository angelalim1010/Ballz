class Ball{
  constructor(gameWidth,gameHeight, angle){
    this.canvas.width = gameWidth;
    this.canvas.height = gameHeight;
    this.radius = 10;
    this.position = {
      x: gameWidth/2;
      y: gameHeight - 30;
    };
    this.slope = {
      dx = Math.cos(angle);
      dy = Math.sin(angle);
    };
    this.moving = false;
    this.speed = {
      x: 0, y:0
    };
    this.angle = 90;
  }


  getAngle(){
    return this.angle;
  }
  isMoving(){
    return this.moving;
  }
  draw(){
    this.canvas.beginPath();
    this.canvas.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
    this.canvas.fillStyle = "#0095DD";
    this.canvas.fill();
    this.canvas.closePath();
  }
  move(){
    this.moving = true;
    this.speed = {x: 8; y: 8};
    if(this.x + this.slope.dx >= this.gameWidth-ballRadius || this.x + this.slope.dx <= ballRadius) {
        this.slope.dx = -(this.dx);
    }
    if(this.y + this.slope.dy <= ballRadius || this.y + this.slope.dy >= this.gameHeight-ballRadius) {
        this.dy = -(this.dy);
    }
  }
  stop(){
    this.moving = false;
    this.speed = {x: 0, y:0};
  }
  rotateLeft(){
    if(!this.moving && this.angle < 180){
      this.angle += 1;
    };
  }
  rotateRight(){
    if(!this.moving && this.angle > 0){
      this.angle -= 1;
    };
  }
  updateSlope(){
    this.slope.dx = Math.cos(this.angle * (Math.PI / 180));
    this.slope.dy = Math.sin((this.angle + 180) * (Math.PI / 180));
  }
  reset(){
    this.position = {
      x: gameWidth/2;
      y: gameHeight - 30;
    };
    this.moving = false;
    this.speed = {
      x: 0, y:0
    };
    this.angle = 90;
  }

  update(){
    this.updateSlope();
    this.position.x += this.speed.x * this.slope.dx;
    this.position.y += this.speed.y * this.slope.dy;
  }
}
