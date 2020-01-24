const express = require("express")
const server = express()

server.get("/", (res,req) => {
    res.send(`<h1>Congrats on getting the server up and running!</h1><h3>This is just the beginning tho</h3>`)
})



module.exports = server