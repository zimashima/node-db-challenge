const express = require("express")

const dbMain = require("./model")

const router = express.Router()


router.get("/tasks", async (req,res)=> {
    
    try {
        return res.status(200).json(await dbMain.getAllTasks())
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get TASK LIST` })
    }

})

router.get("/resources", async (req,res)=> {
    
    try {
        return res.status(200).json(await dbMain.getAllResources())
    }
    catch{
        res.status(500).json({ message: `ERROR 500, fail to get RESOURCE LIST` })
    }

})

module.exports = router