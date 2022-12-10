const express = require('express');
const router = express.Router();

const workshopManagerService = require("../services/workshopManager")

router.get("/:id",async(req,res)=> {
    const {id} = req.query
    if(id){
        const response = await workshopManagerService.getById(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/:name",async(req,res)=> {
    const {name} = req.query
    if(name){
        const response = await workshopManagerService.getByName(name)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/",async(req,res)=> {
    const response = await workshopManagerService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put(async(req,res)=>{
    const {id,name,logo, photo} = req.body
    if(id&&name&&logo&&photo){
        const response = await workshopManagerService.update(id,name,logo, photo)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.delete(async(req,res)=>{
    const {id} = req.body
    if(id){
        const response = await workshopManagerService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router