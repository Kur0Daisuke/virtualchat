const canvas = document.getElementById("gameWindow");
const CANVAS_WIDTH  = canvas.clientWidth;
const CANVAS_HEIGHT = canvas.clientHeight;
const ctx = canvas.getContext("2d");

var gameMap = {
    "john": new Player(),
    "ground": new Prop(0, 115, 100, 50, "green")
}

EntityList.SetEntities = gameMap


function render(time) {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)

    InputManager.inputUpdate()

    GlobalVariables.deltaTime = (GlobalVariables.time - GlobalVariables.lastTime)
    
    GlobalVariables.lastTime = GlobalVariables.time;
    GlobalVariables.time = time/1000;
    

    for(let [key, value] of Object.entries(gameMap)) {
        gameMap[key].Draw(ctx);
        gameMap[key].Update()
    }
    Physics.CheckCollision()

    requestAnimationFrame(render);
}
render(0);