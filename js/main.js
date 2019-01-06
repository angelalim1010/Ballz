$(function(){
    var canvas = new Canvas();

    var balls = [];
    for(var i = 0; i < 10; i++){
        balls.push(new Ball(canvas));
    }

    var arrow = new Arrow(canvas, balls[0].getPosition());

    var bricks = []

    for(var i = 0; i < 3; i++){
        bricks.push(new Brick(canvas, i);
    }

    var ball_handle = new ballHandler(canvas, bricks, balls[0].getRadius());

    var inputHandler = new ArrowInputHandler(arrow, balls[0]);

    var nextMove;

    var startTime;
    var firstBall = -1;

    $('#startGame').click(function(){
        if(!balls[0].isMoving()){
            for(var i = 0; i < balls.length; i++){
                nextMove = new Movement(arrow.getAngle(), 5);
                balls[i].setMovement(nextMove);
            }
            arrow = new Arrow(canvas, balls[0].getPosition());
            inputHandler = new ArrowInputHandler(arrow, balls[0]);
            startTime = Date.now();
            this.blur();
        }
    });

    var step = function() {
		canvas.draw().clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
		for (var j = 0; j < bricks.length; j++) {
			bricks[j].draw();
		}
		for (var i = 0 ; i < balls.length ; i++) {
			var ball = balls[i];

			ball.draw();
			// Check if the ball should start moving.
			 if (!ball.isMoving()) {
				if (Date.now() - startTime > 500 * i) {
					ball.move(mvmt);
				}
				ball.draw();
				return;
			}

			var move = ball.createMovement();
			move.borderTouched(canvas);
			for (var j = 0; j < brick.length; j++) {
				var brick = brick[j];

				if (move.brickTouched(brick)) {
					brick.touchedByBall();
					brick.draw();
				}

			}
			ball.move(move.getMovement());
			ball.draw();
		}
	};
});
