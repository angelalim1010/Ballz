$(function() {
  var canvas = new Canvas();

  // Create the bricks.
  var brick = new Brick(canvas);
  brick.draw();

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
    brick.draw();
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
      if (move.handleBrick(brick)) {
        brick.touchedByBall();
        brick.draw();
      }

      ball.erase();
      ball.move(move.getMovement());
      ball.draw();
    }
  };

  // Handle click on Start button.
  $('#start').click(function() {
  //  console.log('Start clicked');
    startTime = Date.now();
    setInterval(doOneStep, /*milliseconds=*/20);
  });


});
