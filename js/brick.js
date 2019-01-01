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
    this.canvas.fillStyle = "#0095DD";
    this.canvas.fillRect(this.x, this.y, this.SIZE, this.SIZE);
    this.canas.fillStyle = "black";
    this.canvas.font = "20px Arial";
    this.canvas.textAlign = "center";
    this.canvas.textBaseLine = "middle";
    this.canvas.fillText(this.power, this.x + this.SIZE/2, this.y + this.SIZE/2);
    this.canvas.stroke();
  }
  decreasePower(){
    this.power--;
  }
}
