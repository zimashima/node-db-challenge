const db = require("../../data/dbConfig")

module.exports = {
    getResourceByPId,
    postNewResource
}


function getResourceByPId(id){
    return db("resources").where("projectId", id)
}

async function postNewResource(reqBody){
    const [ id ] = await db("resources").insert(reqBody)
    return db("resources").where("id", id).first()
}

// async function postNewProject(reqBody){
//     const [ id ] = await db("projects").insert(reqBody)
//     return db("projects").where("id", id).first()
// }