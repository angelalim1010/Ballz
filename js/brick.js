class Brick{
  constructor(canvas){
    this.canvas = canvas;
    this.SIZE = 50;
    this.x = 75;
    this.y = 75;
    this.power = 10;

  }
  getTop(){
    return this.y;
  }
  getBottom(){
    return this.y + this.SIZE;
  }
  getLeft(){
    return this.x
  }
  getRight(){
    return this.x + this.width;
  }
  isActive(){
    return this.power > 0;
  }
  draw(){
    if(!this.isActive){
      return;
    }
    this.canvas.draw().fillStyle = "#0095DD";
    this.canvas.draw().fillRect(this.x, this.y, this.SIZE, this.SIZE);
    this.canas.draw().fillStyle = "black";
    this.canvas.draw().font = "20px Arial";
    this.canvas.draw().textAlign = "center";
    this.canvas.draw().textBaseLine = "middle";
    this.canvas.draw().fillText(this.power, this.x + this.SIZE/2, this.y + this.SIZE/2);
    this.canvas.draw().stroke();
  }
  decreasePower(){
    this.power--;
  }
}
