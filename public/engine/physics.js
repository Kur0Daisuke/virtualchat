class Physics {
    #position = {
        x: 0,
        y: 0,
    }
    #sprite = new Sprite(10, 10, this.#position);
    #velocityY = 0;
    #velocityX = 1;
    #speed = 50;
    #mass = 5;
    #sliperyMultiplier = 3;
    #static = false;

    get position()  { return this.#position; }
    get sprite()    { return this.#sprite;   }
    get speed()     { return this.#speed;    }
    set static(val) { this.#static = val;    }

    AddForce(Dirx, Diry, force) {
        this.#velocityY += force * Diry;
        this.#velocityX += force * Dirx *2;
    }

    PhysicsUpdate() {
        if(this.#static) return;

        this.#position.y += this.#velocityY * this.#mass * GlobalVariables.fps;
        this.#position.x += this.#velocityX * GlobalVariables.fps;

        if(this.#position.y < GlobalVariables.floorY) {
            this.#velocityY += GlobalVariables.Gravity * GlobalVariables.fps;
        }else {
            this.#velocityY = 0;
        }

        if(this.#velocityX > GlobalVariables.fps) {
            this.#velocityX -= (GlobalVariables.Gravity * GlobalVariables.fps * this.#sliperyMultiplier) - (InputManager.GetAxis("x") * GlobalVariables.fps);
        }
            
        if(this.#velocityX < GlobalVariables.fps) {
            this.#velocityX += (GlobalVariables.Gravity * GlobalVariables.fps * this.#sliperyMultiplier) - (InputManager.GetAxis("x") * GlobalVariables.fps);
        }   
    }
}