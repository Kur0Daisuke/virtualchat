
class GameObject extends Physics{
    constructor(isStatic) {
        super();
        this.static = isStatic;
        this.loaded = false;
        this.Start();
    }
    async Start() {
        this.loadStatus = await this.sprite.load();
        if(this.loadStatus) this.loaded = true;
    }

    Draw(ctx) {
        if(!this.loaded) return;
        this.sprite.draw(ctx);
    }

    Update() {
        if(!this.loaded) return;
        this.PhysicsUpdate();
    }
}