class Ball{

    constructor(canvas){
        this.RADIUS = 5;
        this.canvas = canvas;
        this.position = canvas.getInitialPosition();
        this.movement = new Movement(90, 0);
    }

    getRadius(){ return this.RADIUS; }
    getPosition(){ return this.position; }

    isMoving(){ return this.movement.isMoving(); }

    draw(){
        this.canvas.setColor("#DDDDDD");
        this.canvas.draw().beginPath();
        this.canvas.draw().arc(this.position.getX(), this.position.getY(), this.RADIUS, 0, 2 * Math.PI, false);
        this.canvas.draw().fill();
    }

    setMovement(movement){ this.movement = movement; }

    move(bounce){
        bounce.bounceWall(this.position, this.movement);
        bounce.bounceBricks(this.position, this.movement);
        this.position.move(this.movement);

        if(this.isMoving() && bounce.bottomTouched(this.position)){
            this.movement = new Movement(90, 0);
            this.position.setY(this.canvas.getInitialPosition().getY());
        }
    }

}
