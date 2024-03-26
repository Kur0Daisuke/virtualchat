const canvas = document.getElementById("gameWindow");
const CANVAS_WIDTH  = canvas.clientWidth;
const CANVAS_HEIGHT = canvas.clientHeight;
const ctx = canvas.getContext("2d");

var gameMap = {
    "john": new Player(),
    "proptest": new Prop(10, 0)
}


function render() {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)

    for(let [key, value] of Object.entries(gameMap)) {
        gameMap[key].Draw(ctx);
        gameMap[key].Update()
    }

    requestAnimationFrame(render);
}
render();