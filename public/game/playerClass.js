

class Player extends GameObject{
    constructor() {
        super(false);
    }

    Update() {
        super.Update()
        //keyboard
        this.position.x += this.speed * GlobalVariables.fps * InputManager.GetAxis("x");
    }
}