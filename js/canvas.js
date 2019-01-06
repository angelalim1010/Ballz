// Represents the area where the game is played.
class Canvas {

  constructor() {
    var jQueryCanvas = $('canvas');
    this.canvas = jQueryCanvas[0].getContext('2d');
    this.width = jQueryCanvas.width();
    this.height = jQueryCanvas.height();
    console.log('Canvas dimensions are ' + this.width + ' x ' + this.height);
  }

  draw() { return this.canvas; }

  setColor(color) { this.canvas.fillStyle = color; }

  // Return the dimension of the canvas.
  getWidth() { return this.width; }
  getHeight() { return this.height; }

  // Return the initial position of the balls.
  getInitialPosition() {
    return new Position(this.width / 2, this.height - 10);
  }

}
