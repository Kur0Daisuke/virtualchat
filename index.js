const app = require("express")();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200)
    res.send({
        message: "welcome"
    })
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))