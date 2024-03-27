class Physics {
    #position = {
        x: 0,
        y: 0,
    }
    #sprite = new Sprite(10, 10, this.#position);
    #velocityY = 0;
    #velocityX = 0;
    #accelerationY = 0;
    #speed = 50;
    #mass = 5;
    #isColliding = false;
    #sliperyMultiplier = 6;
    #static = false;

    get position()    { return this.#position; }
    get sprite()      { return this.#sprite;   }
    get speed()       { return this.#speed;    }
    get isColliding() { return this.#isColliding }
    set static(val)   { this.#static = val;    }

    AddForce(Dirx, Diry, force) {
        this.#velocityY += force * Diry;
        this.#velocityX += force * Dirx *2;
    }

    static CheckCollision() {
        for(let i = 0; i < EntityList.Entites.length; i++) {
            for (let x = 0; x < EntityList.Entites.length; x++) {
                if(i !== x) {
                    let rect1 = EntityList.Entites[i];
                    let rect2 = EntityList.Entites[x];
                    if (
                        rect1.position.x < rect2.position.x + rect2.sprite.w &&
                        rect1.position.x + rect1.sprite.w > rect2.position.x &&
                        rect1.position.y < rect2.position.y + rect2.sprite.h &&
                        rect1.position.y + rect1.sprite.h > rect2.position.y
                    ) {
                        if(rect1.position.y < rect2.position.y) {
                            rect1.#velocityY = 0
                            // rect1.AddForce(0,-1, Math.abs((rect1.#velocityY/2)))
                            rect1.#isColliding = true;
                        }
                    }else {
                        rect1.#isColliding = false;
                    }
                }
            }
        }
    }

    PhysicsUpdate() {
        if(this.#static && EntityList.Entites !== null) return;

        console.log(this.#velocityY, this.#accelerationY, Math.abs(0))

        this.#position.y += this.#velocityY * GlobalVariables.deltaTime;
        this.#position.x += this.#velocityX * GlobalVariables.fps;

        this.#velocityY += (this.#mass * GlobalVariables.Gravity) * GlobalVariables.deltaTime;
        this.#accelerationY = Math.abs(this.#velocityY)

        // this.#velocityX -= InputManager.GetAxis("x") * GlobalVariables.fps;
        // console.log(this.#velocityX)

        // if(this.#velocityX > GlobalVariables.fps) {
        //     this.#velocityX -= (GlobalVariables.fps * this.#sliperyMultiplier);
        // }else if(this.#velocityX < GlobalVariables.fps) {
        //     this.#velocityX += (GlobalVariables.fps * this.#sliperyMultiplier);
        // }else this.#velocityX = 0;
    }
}
