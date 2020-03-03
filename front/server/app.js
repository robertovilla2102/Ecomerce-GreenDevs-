const express = require('express')
const path = require('path')
const app = express()

app.set("port", process.env.PORT || 3000)

//ruta publcia
app.use(express.static(__dirname + "/../src/assets"))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../src/assets", "index.html"))
})

/* app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) */

app.listen(app.get("port"), () => {
    console.log("el server anda bien en el port:", app.get('port'));
})

