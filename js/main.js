$(function() {
  var canvas = new Canvas();

  // Create the bricks.
  var bricks = [];
  for(var i = 0; i < 4; i++){
        bricks.push(new Brick(canvas, new Position((i+1) * 50, 200)));
    }

  // Create the balls.
  var balls = [];
  for (var i =0 ; i < 10 ; ++i) {
    balls.push(new Ball(canvas));
  }
  balls[0].draw();

  // Create aim line.
  var aimLine = new AimLine(canvas);
  aimLine.initialize();

  var startTime;

  // Makes all the balls progress by one step.
  var doOneStep = function() {
    canvas.draw().clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
    for (var j = 0; j < bricks.length; j++) {
			bricks[j].draw();
		}
    for (var i = 0 ; i < balls.length ; ++i) {
      var ball = balls[i];

      // Check if the ball should start moving.
      if (!ball.isMoving()) {
        if (Date.now() - startTime > 500 * i) {
          ball.erase();
          ball.move(aimLine.getMovement());
        }
        ball.draw();
        return;
      }

      var move = ball.createMove();
      move.handleBorder(canvas);
      for (var j = 0; j < bricks.length; j++) {
      				var brick = bricks[j];

      				if (move.handleBrick(brick)) {
      					brick.touchedByBall();
      					brick.draw();
      				}


      		}

      ball.erase();
      ball.move(move.getMovement());
      ball.draw();
    }
  };

  // Handle click on Start button.
  $('#start').click(function() {
    console.log('Start clicked');
    startTime = Date.now();
    setInterval(doOneStep, /*milliseconds=*/20);
  });


});
