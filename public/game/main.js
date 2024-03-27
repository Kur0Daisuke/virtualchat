const canvas = document.getElementById("gameWindow");
const CANVAS_WIDTH  = canvas.clientWidth;
const CANVAS_HEIGHT = canvas.clientHeight;
const ctx = canvas.getContext("2d");

var gameMap = {
    "john": new Player(),
    "ground": new Prop(0, 115, 100, 50, "green")
}

EntityList.SetEntities = gameMap


function render() {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)

    InputManager.controllerUpdate()

    for(let [key, value] of Object.entries(gameMap)) {
        gameMap[key].Draw(ctx);
        gameMap[key].Update()
    }
    Physics.CheckCollision()

    requestAnimationFrame(render);
}
render();