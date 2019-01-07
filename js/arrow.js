// Useful to handle events in a private method.
// See http://stackoverflow.com/questions/15356936.
function bind(scope, fn) {
  return function() {
    return fn.apply(scope, arguments);
 }
}

// Represent the line that the user uses to aim for the initial ball direction.
class AimLine {

  constructor(canvas) {
    this.DELTA = 1;
    this.LENGTH = 50;
    this.canvas = canvas;
    this.angle = 110;
  }

  // Starts listening to keyboard events.
  initialize() {
    window.addEventListener('keydown', bind(this, this._onKeyDown));
    this._draw(this.angle, /*erase=*/false);
  }

  // Returns the initial movement that balls should have.
  getMovement() {
    const length = 5;
    return new Movement(Math.round(length * Math.cos(this._degreeToRadian(this.angle))),
                        Math.round(length * -Math.sin(this._degreeToRadian(this.angle))));
  }

  // If erase if false, draws the line at a given angle.
  // If erase is true, erases the line at a given angle.
  _draw(angle, erase) {
    const startX = this.canvas.getInitialPosition().getX();
    const startY = this.canvas.getInitialPosition().getY() - 5;
    this.canvas.draw().beginPath();
    this.canvas.draw().moveTo(startX, startY);
    const length = this.LENGTH + (erase ? 3 : 0);
    this.canvas.draw().lineTo(
        startX + Math.round(length * Math.cos(this._degreeToRadian(angle))),
        startY - Math.round(length * Math.sin(this._degreeToRadian(angle))));
    this.canvas.draw().strokeStyle =
        erase ? "#FFFFFF" /* white */ : "#000000" /* blue */;
    this.canvas.draw().lineWidth = erase ? 3 : 1;
    this.canvas.draw().stroke();
  }

  // Called when a key is pressed.
  _onKeyDown(keyEvent) {
    switch (keyEvent.key) {
      case "ArrowLeft":
        this._changeAngle(this.DELTA);
        break;
      case "ArrowRight":
        this._changeAngle(-this.DELTA);
        break;
      default:
        // Nothing to do on other key pressed.
    }
    console.log('Key ' + keyEvent.key +  ' pressed. ' +
                'Aim line angle is now ' + this.angle);
  }

  // Converts an angle from degrees to radians.
  _degreeToRadian(degree) {
    return degree * Math.PI / 180;
  }

  // Changes the angle by delta
  _changeAngle(delta) {
    const oldAngle = this.angle;
    this.angle += delta;
    this.angle = Math.max(this.angle, 0);
    this.angle = Math.min(this.angle, 180);
    if (oldAngle == this.angle) {
      return;
    }
    this._draw(oldAngle, /*erase=*/true);
    this._draw(this.angle, /*erase=*/false);
  }

}
