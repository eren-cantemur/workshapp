const express = require('express');
const router = express.Router();

const adminService = require("../services/admin")


router.get("/:id",async(req,res)=> {

    const id = req.query.id

    const result = await adminService.getById(id)
})
router.get("/:name",async(req,res)=> {

    const name = req.query.name
    adminService.getByName(name)
})
router.get("/",async(req,res)=> {
    adminService.getAll()
})
router.put(async(req,res)=>{

    if (!req.query.id || !req.query.name) {
        res.status(400).send({message : "Missing query data!"})
    }
    const id = req.query.id
    const name = req.query.name
    adminService.update(id,name)
})
router.delete(async(req,res)=>{
    adminService.delete(req,res)
})
module.exports = router