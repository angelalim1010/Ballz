//class that handles when the left arrow and right arrow are pressed
//changes angle of the arrow 

class ArrowInputHandler{

    constructor(arrow, ball){
        document.addEventListener('keydown', event => {

            switch(event.key){

                case "ArrowLeft":
                    if(!ball.isMoving()){
                        arrow.rotateLeft();
                    };
                break;

                case "ArrowRight":
                    if(!ball.isMoving()){
                        arrow.rotateRight();
                    };
                break;
            };
        })
    }
}
