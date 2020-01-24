const express = require("express")

const db = require("./model.js")
const dbProjects = require("../projects/model.js")

const router = express.Router()


//**ROUTER ** *//

router.get("/", validateProjectId, async (req,res)=> {
    try {
        return res.status(200).json(await db.getTaskByPId(req.projectId))
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get TASKS for Project ${req.projectId}` })
    }

})


router.post("/", validateProjectId, validateRequest, async (req,res)=> {
    const newTask = { ...req.body, projectId: parseInt(req.projectId)}
    console.log(newTask)
    try {
        return res.status(200).json(await db.postNewTask(newTask))
    }
    catch{
        res.status(500).json({ message: `ERROR 500, to add new RESOURCE to the project` })
    }

})


//** MIDDLEWARE ** *//

async function validateProjectId(req, res, next){
    const project = await dbProjects.getProjectById(req.projectId)
    if (project){
      next()
    } else {
      res.status(404).json({ message: "ID not found, please provide a valid Project ID" })
    }
}

function validateRequest(req, res, next){
    if (!req.body){
        res.status(400).json({ message: `Please make sure the REQUEST BODY is not empty` })
      } else if (!req.body.notes) {
        res.status(400).json({ message: `Please make sure that NOTES field is not empty` })
      } else if (!req.body.description){
        res.status(400).json({ message: `Please make sure that DESCRIPTION field is not empty` })
      } else {
        next()
      }
}





module.exports = router