const db = require("../../data/dbConfig")

module.exports = {
    getAllProjects,
    getProjectById,
    postNewProject,
    updateProject,
    deleteProject
}

async function getAllProjects(){
    return db("projects")
}

function getProjectById(id){
    return db("projects").where("id", id).first()
}

async function postNewProject(reqBody){
    const [ id ] = await db("projects").insert(reqBody)
    return db("projects").where("id", id).first()
}

async function updateProject(reqId, reqBody){
    await db("projects").update(reqBody).where("id", reqId)
    return db("projects").where("id", reqId).first()
}

async function deleteProject(id){
    return await db("projects").where("id", id).del()
}