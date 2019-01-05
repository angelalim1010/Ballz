class Brick{
  constructor(canvas){
    this.canvas = canvas;
    this.SIZE = 50;
    this.WIDTH = 75;
    this.HEIGHT = 75;
    //this.position = position;
    this.power = 10;

  }
  getTop(){
    return this.HEIGHT;
  }
  getBottom(){
    return this.HEIGHT + this.SIZE;
  }
  getLeft(){
    return this.WIDTH;
  }
  getRight(){
    return this.WIDTH + this.SIZE;
  }
  isActive(){
    return this.power > 0;
  }
  draw(){
    if(!this.isActive){
      return;
    }
    this.canvas.setColor("#0095DD");
    this.canvas.draw().fillRect(this.WIDTH, this.HEIGHT, this.SIZE, this.SIZE);
    this.canas.setColor("#000000");
    this.canvas.draw().font = "20px Arial";
    var textWidth = this.canvas.draw().measureText(this.power).width;
		this.canvas.draw().fillText(
			this.power,
			this.x + (this.SIZE - textWidth) / 2,
			this.y + textHeight + (this.SIZE - textHeight) / 2);
  }
  decreasePower(){
    this.power--;
  }
}
