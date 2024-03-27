class GlobalVariables {
    static floorY = 100;
    static Gravity = 50;
    static time = 0;
    static lastTime = 0;
    static deltaTime = 0;
    static fps = 1/60; // 60 frames per second
}

class Sprite{
    constructor(w,h,pos) {
        this.w = w;
        this.h = h;
        this.c = "black";
        this.pos = pos;
    }
    load() {
        return new Promise((res, rej) => {
            res(true);
        });
    }
    draw(ctx) {
        ctx.fillStyle = this.c;
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
    static #controllerIndex = null;
    static currentKeys = [];
    static #keyMap = {
        "jump": ["Space"],
        "right": ["KeyD", "ArrowRight"],
        "left": ["KeyA", "ArrowLeft"],
    }

    static CheckKeyPress(key) {
        for (let i = 0; i < InputManager.#keyMap[key].length; i++) {
            if(InputManager.currentKeys[InputManager.#keyMap[key][i]]) {
                return true;
            }
        }
        return false;
    }

    static OnKeyPressed(key) {
        if(InputManager.CheckKeyPress(key)) return true
        else return false
    }

    static inputUpdate () {
        if(InputManager.#controllerIndex == null) return
        let gamepad = navigator.getGamepads()[InputManager.#controllerIndex];

        if(InputManager.CheckKeyPress("right")) {
            InputManager.AxisX = 1;
        }else if(InputManager.CheckKeyPress("left")) {
            InputManager.AxisX = -1;
        }else {
            InputManager.AxisX = 0;
        }
        
        InputManager.AxisX = gamepad.axes[0]
    }

    static #Start = (() => {    
        // movement listener
        window.addEventListener("keydown", (e) => {
            InputManager.currentKeys[e.code] = true;
        })
        
        window.addEventListener("keyup", (e) => {
            InputManager.currentKeys[e.code] = false;
        })

        window.addEventListener("gamepadconnected", (e) => {
            InputManager.#controllerIndex = e.gamepad.index;
        })

        window.addEventListener("gamepaddisconnected", (e) => {
            InputManager.#controllerIndex = null;
        })
    })();

    static GetAxis(dir) {
        switch(dir) {
            case "x": 
                return InputManager.AxisX;
            case "y":
                return InputManager.AxisY;
        }
    }
}

const clamp = (val, min, max) => Math.min(Math.max(val, min), max)