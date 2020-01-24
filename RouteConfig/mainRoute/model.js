const db = require("../../data/dbConfig")

module.exports = {
    getAllTasks,
    getAllResources
}



function getAllTasks(){
    return db("tasks")
}

function getAllResources(){
    return db("resources")
}