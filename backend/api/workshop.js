const express = require('express');
const router = express.Router();

const workshopService = require("../services/workshop")

router.post(async(req,res)=>{
    const {name, capacity} = req.body
    if(name&&capacity){
        const response = await workshopService.create(name, capacity)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/:id",async(req,res)=> {
    const {id} = req.query
    if(id){
        const response = await workshopService.getById(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/:workshopManagerId",async(req,res)=> {
    const {workshopManagerId} = req.query
    if(workshopManagerId){
        const response = await workshopService.getByWorkshopManagerId(workshopManagerId)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/",async(req,res)=> {
    const response = await workshopService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put(async(req,res)=>{
    const {id,name, capacity} = req.body
    if(id&&name&&capacity){
        const response = await workshopService.update(id, name, capacity)
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
        const response = await workshopService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router