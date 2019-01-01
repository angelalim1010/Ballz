class ArrowInputHandler{
    constructor(arrow, ball){
        document.addEventListener('keydown', event => {

            switch(event.code){
                //left arrow
                case ArrowLeft:
                    if(!ball.isMoving()){
                        arrow.rotateLeft();
                    };
                    break;

                //right arrow
                case ArrowRight:
                    if(!ball.isMoving()){
                        arrow.rotateRight();
                    };
                    break;
            };
        })
    }
}
