

class Player extends GameObject{
    constructor() {
        super(false);
    }

    Update() {
        super.Update()

        if(this.isColliding) {
            if(InputManager.OnKeyPressed("jump")) {
                console.log(this.AddForce)
                this.AddForce(0, -1, 10)
            }
        }
        //keyboard
        this.position.x += this.speed * GlobalVariables.fps * InputManager.GetAxis("x");
    }
}