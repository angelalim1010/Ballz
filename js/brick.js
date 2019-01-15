// Represents one brick in the game.
class Brick {

  constructor(canvas, position){
      this.canvas = canvas;
      this.WIDTH = 40;
      this.HEIGHT = 40;
      this.position = position;
      this.power = power;
  }

  getTop(){ return this.position.getY(); }
  getBottom(){ return this.position.getY() + this.HEIGHT; }
  getLeft(){ return this.position.getX(); }
  getRight(){ return this.position.getX() + this.WIDTH; }

  isActive(){ return this.power > 0; }

  draw(){
      this.canvas.draw().setColor("#AAAAAAA");
      this.canvas.draw().fillRect(this.position.getX(), this.position.getY(), this.WIDTH, this.HEIGHT);
      this.canvas.draw().setColor = "#000000";
      const textHeight = 12;
		this.canvas.draw().font = textHeight + "px Arial";
		var textWidth = this.canvas.draw().measureText(this.power).width;
		this.canvas.draw().fillText(
			this.power,
			this.x + (this.SIZE - textWidth) / 2,
			this.y + textHeight + (this.SIZE - textHeight) / 2);
  }
  decreasePower(){
    this.power--;
  }
	// Indicates that the brick has been touched by a ball.
	touchedByBall() {
		if (--this.power <= 0) {
			//this._erase();
		};
	}
  _erase(){

  }
}
