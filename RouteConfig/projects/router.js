const express = require("express")

const db = require("./model")

const router = express.Router()


//**ROUTER ** *//

router.get("/", async (req,res)=> {
    
    try {
        return res.status(200).json(await db.getAllProjects())
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get PROJECT LIST` })
    }

})

router.get("/:id", validateId, async (req ,res)=> {
    
    try {
        return res.status(200).json(req.project)
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get the requested project` })
    }

})

router.post("/", validateRequest, async (req ,res)=> {

    try {
        return res.status(201).json(await db.postNewProject(req.body))
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get PROJECT LIST` })
    }

})

//** MIDDLEWARE ** *//

async function validateId(req, res, next){
    const project = await db.getProjectById(req.params.id)
    if (project){
        req.project = project
        console.log(req.project)
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