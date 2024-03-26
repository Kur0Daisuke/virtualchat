class Prop extends GameObject {
    constructor(x,y) {
        super(true) // ___ to make the object static and not moving

        this.position.x = x;
        this.position.y = y;
    }

    Update() {
        super.Update()
    }
}