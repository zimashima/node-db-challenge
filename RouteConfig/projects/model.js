const db = require("../../data/dbConfig")

module.exports = {
    getAllProjects,
    getProjectById,
    postNewProject
}

function getAllProjects(){
    return db("projects")
}

function getProjectById(id){
    return db("projects").where("id", id).first()
}

async function postNewProject(reqBody){
    const [ id ] = await db("projects").insert(reqBody)
    return db("projects").where("id", id).first()
}