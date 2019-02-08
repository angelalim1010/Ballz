$(function(){
    var canvas = new Canvas();

    var balls = [];
    for(var i = 0; i < 10; i++){
        balls.push(new Ball(canvas));
    }

    var arrow = new Arrow(canvas, balls[0].getPosition());
    var score = 1;
    var bricks = [];

    for(var i = 0; i < 7; i++){
        bricks.push(new Brick(canvas, score, new Position((i+1) * 45, 50)));
    }

    var bounce = new Bounce(canvas, bricks, balls[0].getRadius());

    var inputHandler = new ArrowInputHandler(arrow, balls[0]);

    var nextMove;

    var startTime;
    var firstBall = undefined;
    var startRound = false;
    $('#startGame').click(function(){
        if(!startRound){
            for(var i = 0; i < balls.length; i++){
                nextMove = new Movement(arrow.getAngle(), 5);
                balls[i].setMovement(nextMove);
            }
            arrow = new Arrow(canvas, balls[0].getPosition());
            inputHandler = new ArrowInputHandler(arrow, balls[0]);
            startTime = Date.now();
            this.blur();
            startRound = true;
        }

    });

    function ballsMoving(){
        for(var i = 0; i < balls.length; i++){
            if(balls[i].isMoving()) return true;
        }
        return false;

    }
    var drawTiles = function(){
      for(var i = 0; i < bricks.length; i++){
          if(bricks[i].isActive()) bricks[i].draw();
          //bricks.splice(i, 1);
          else bricks.splice(i, 1);
            //bricks=bricks.filter(bricks=>bricks.isActive())

      }
    }
    var roundEnd = function(){
        for (var i = 0; i < bricks.length; i++){
          if(bricks[i].isActive()){
          brick = bricks[i];
          brick.shiftRowDown();
        }
        if (brick.isActive && brick.getTop() >= canvas.getHeight() - 99) {
					alert("Game over. Plese refresh the page");
					console.log("Refresh page to try again");
				}
        }
        //
        // bricks.push(new Array());
        // for (var i = 0; i < 7; i++)
        // bricks.push(new Brick(canvas,score, new Position((i+1) * 45, 50)));
      //  drawTiles();

    }

    function gameLoop(){
        canvas.draw().clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
        drawTiles();
        if(!startRound){
            arrow.draw();
        }

        for(var i = 0; i< balls.length; i++){
            if(Date.now() - startTime > 200 * i){
                balls[i].move(bounce);
                if(startRound && !balls[i].isMoving() && firstBall == undefined) firstBall = i;
            }

            balls[i].draw();
        }

        if(firstBall != undefined && !ballsMoving() && startRound){
            var startX = balls[firstBall].getPosition().getX();
            for(var i = 0; i < balls.length; i++){
                if(i != firstBall){
                    balls[i].getPosition().setX(startX);
                }
            }
            startRound = false;
            firstBall = undefined;
            console.log("balls stopped moving")
            roundEnd();

        }
        requestAnimationFrame(gameLoop);
    }

    gameLoop();




});
