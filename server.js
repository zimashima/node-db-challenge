const express = require("express")
const server = express()

const mainRouter = require("./RouteConfig/mainRoute/router")
const projectsRouter = require("./RouteConfig/projects/router")
const tasksRouter = require("./RouteConfig/tasks/router")
const resourcesRouter = require("./RouteConfig/resources/router")


server.use(express.json())
server.use(logger)



server.get("/", (res,req) => {
    res.send(`<h1>Congrats on getting the server up and running!</h1><h3>This is just the beginning tho</h3>`)
})


function logger(req, res, next) {
    const { method, originalUrl } = req;
    console.log(`${method} to ${originalUrl}`);
    next();
}

server.use("/api", mainRouter)
server.use("/api/projects", projectsRouter)
server.use("/api/projects/:projectId/tasks", passProjectId, tasksRouter)
server.use("/api/projects/:projectId/resources", passProjectId, resourcesRouter)


function passProjectId(req, res,next){
    req.projectId = req.params.projectId
    next()
}

module.exports = server