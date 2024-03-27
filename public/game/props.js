class Prop extends GameObject {
    constructor(x,y, w, h, color) {
        super(true) // ___ to make the object static and not moving

        this.position.x = x;
        this.position.y = y;
        this.sprite.w = w;
        this.sprite.h = h;
        this.sprite.c = color;
    }

    Update() {
        super.Update()
    }
}