class Arrow{

    constructor(canvas, ballPosition){
        this.canvas = canvas;
        this.length = 100;
        this.start = canvas.getInitalPosition;
        this.end.setY(this.end.getY()- this.LENGTH);
        this.angle = 90;
    }


    getAngle(){ return this.angle; }

    draw(){
      this._update();
      this.canvas.draw().beginPath();
      this.canvas.draw().moveTo(this.start.getX(), this.start.getY());
      this.canvas.draw().lineWidth = 4;
      this.canvas.draw().lineTo(this.end.getX(), this.end.getY());
      this.canvas.draw().stroke();
      this.canvas.draw().lineWidth = 1;
    }

    rotateRight(){
        if(this.angle > 1){
            this.angle -= 1;
        };
    }

    rotateLeft(){
        if(this.angle < 179){
            this.angle += 1;
        };
    }

    resetAngle(){
        this.angle = 90;
    }

    update(startX, startY){
        this.start.x = startX;
        this.start.y = startY;
        this.end.x = this.start.x + this.length * Math.cos(this.angle * (Math.PI / 180));
        this.end.y = this.start.y + this.length * Math.sin((this.angle + 180) * (Math.PI / 180));
    }
}
