class Brick{
  constructor(canvas){
    this.canvas = canvas;
    this.SIZE = 50;
    this.x = 75;
    this.y = 25;

  }
  draw(){
    for(var c=0; c<brickColumnCount; c++) {
     for(var r=0; r<brickRowCount; r++) {
       if(bricks[c][r].status == 1) {
           var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
           var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
           bricks[c][r].x = brickX;
           bricks[c][r].y = brickY;
           this.beginPath();
           this.rect(brickX, brickY, brickWidth, brickHeight);
           this.fillStyle = "#0095DD";
           this.fill();
           this.closePath();
       }
      }
    }
  }
}
