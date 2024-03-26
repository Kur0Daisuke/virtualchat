class GlobalVariables {
    static floorY = 100;
    static Gravity = 50;
    static fps = 1/60; // 60 frames per second
}

class Sprite{
    constructor(w,h,pos) {
        this.w = w;
        this.h = h;
        this.pos = pos;
    }
    load() {
        return new Promise((res, rej) => {
            res(true);
        });
    }
    draw(ctx) {
        ctx.fillRect(
            this.pos.x, 
            this.pos.y, 
            this.w, 
            this.h
        )
    }
}

class InputManager {
    static AxisX = 0;
    static AxisY = 0;

    static #Start = (() => {
        window.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "d":
                    this.AxisX = 1;
                    break;
                case "a":
                    this.AxisX = -1;
                    break;
                case "w":
                    this.AxisY = -1;
                    break;
                case "s":
                    this.AxisY = 1;
                    break;
            }
        })
        
        window.addEventListener("keyup", (e) => {
            if(e.key == "d" || e.key == "a" || e.key == "w" || e.key == "s") {
                this.AxisX = 0;
                this.AxisY = 0;
            }
        })
    })();

    static GetAxis(dir) {
        switch(dir) {
            case "x": 
                return this.AxisX;
            case "y":
                return this.AxisY;
        }
    }
}

