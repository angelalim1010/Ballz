class BallMovement{
  constructor(position, movement){
    this.position = position;
    this.movement = movement;
  }
  getMovement(){
    return this.movement;
  }
  borderTouched(canvas){
    if(this.position.x + this.movement.dx >= canvas.getWidth-this.RADIUS || this.position.x + this.movement.dx <= this.RADIUS) {
        this.movement.reverseX;
    }
    if(this.position.y + this.movement.dy <= this.RADIUS || y + dy >= canvas.getHeight-this.RADIUS) {
        this.movement.reverseY;
    })
  }
}
  brickTouched(brick){
    for(var i=0; i<bricks.length; i++){
        if(this.position.x > bricks[i].getLeft() && this.position.x < bricks[i].getRight()){
                //handles top and bottom of the brick
          if(this.position.y > bricks[i].getTop() - this.RADIUS && this.position.y < bricks[i].getBottom() + this.RADIUS){
              this.reverseY();
              bricks[i].decreasePower();
            }
          }else if(this.position.y > bricks[i].getTop() && this.position.y < bricks[i].getBottom()){
                //handles left and right of the brick
            if(this.position.x > bricks[i].getLeft() - this.RADIUS && this.position.x < bricks[i].getRight() + this.RADIUS){
              this.reverseX();
              bricks[i].decreasePower();
          }
        }

    }
  }
