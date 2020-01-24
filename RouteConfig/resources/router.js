const express = require("express")

const db = require("./model.js")
const dbProjects = require("../projects/model.js")

const router = express.Router()


//**ROUTER ** *//

router.get("/", validateProjectId, async (req,res)=> {

    try {
        return res.status(200).json(await db.getResourceByPId(req.projectId))
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get RESOURCES for Project ${req.projectId}` })
    }

})


router.post("/", validateProjectId, validateRequest, async (req,res)=> {
    const newResource = { ...req.body, projectId: parseInt(req.projectId)}
    console.log(newResource)
    try {
        return res.status(200).json(await db.postNewResource(newResource))
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
      } else if (!req.body.name) {
        res.status(400).json({ message: `Please make sure that NAME field is not empty` })
      } else if (!req.body.description){
        res.status(400).json({ message: `Please make sure that DESCRIPTION field is not empty` })
      } else {
        next()
      }
}





module.exports = router