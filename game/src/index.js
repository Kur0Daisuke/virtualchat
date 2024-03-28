const canvas = document.getElementById("gameWindow")
const [CANVAS_WIDTH, CANVAS_HEIGHT] = [canvas.clientWidth, canvas.clientHeight]
const ctx = canvas.getContext("2d");

function render() {
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(0, 0, 50, 50)
    requestAnimationFrame(render);
}
render();