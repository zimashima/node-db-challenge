const db = require("../../data/dbConfig")

module.exports = {
    getAllProjects,
    getAllTasks,
    getAllResources
}

function getAllProjects(){
    return db("projects")
}

function getAllTasks(){
    return db("tasks")
}

function getAllResources(){
    return db("resources")
}