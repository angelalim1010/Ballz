class BallInputHandler{
    constructor(ball, i){
        document.addEventListener('keydown', event => {

            switch(event.code){
                //space
                case Space:
                    if(!ball.isMoving()){
                        setTimeout(function(){
                            ball.move();
                        }, i * 100);
                        break;
                    };
            };

        })
    }
}
