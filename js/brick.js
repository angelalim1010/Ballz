// Represents one brick in the game.
class Brick {

  constructor(canvas, position){
      this.canvas = canvas;
      this.WIDTH = 40;
      this.HEIGHT = 40;
      this.position = position;
      this.power = 12;
  }

  getTop(){ return this.position.getY(); }
  getBottom(){ return this.position.getY() + this.HEIGHT; }
  getLeft(){ return this.position.getX(); }
  getRight(){ return this.position.getX() + this.WIDTH; }

  isActive(){ return this.power > 0; }

  draw(){
      this.canvas.draw().setColor("AAAAAAA");
      this.canvas.draw().fillRect(this.position.getX(), this.position.getY(), this.WIDTH, this.HEIGHT);
      this.canvas.draw().setColor = "000000";
      this.canvas.draw().font = "14px Arial";
      this.canvas.draw().textAlign = "center";
      this.canvas.draw().textBaseline = "middle";
      this.canvas.draw().fillText(this.power, this.position.getX() + this.WIDTH/2, this.position.getY() + this.HEIGHT/2);
      this.canvas.draw().stroke();
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
