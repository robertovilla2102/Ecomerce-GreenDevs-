const express = require('express')
const app = express()

app.set("port", process.env.PORT || 3000)

app.use(express.static(__dirname + "/../src/assets/"))

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/../src/assets/" + "index.html")
})

app.listen(app.get("port"), () => {
    console.log("el server anda bien en el port:", app.get('port'));
})

