const db = require("../../data/dbConfig")

module.exports = {
    getTaskByPId,
    postNewTask
}


function getTaskByPId(id){
    return db("tasks").where("projectId", id)
}

async function postNewTask(reqBody){
    const [ id ] = await db("tasks").insert(reqBody)
    return db("tasks").where("id", id).first()
}