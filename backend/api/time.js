const express = require('express');
const router = express.Router();

const timeService = require("../services/review")

router.post("/",async(req,res)=>{
    const {date, repetation,workshopId} = req.body
    if(date&&repetation&&workshopId){
        const response = await timeService.create(date,repetation,workshopId)
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
        const response = await timeService.getById(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/:workshopId",async(req,res)=> {
    const {workshopId} = req.query
    if(workshopId){
        const response = await timeService.getByWorkshopId(workshopId)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/",async(req,res)=> {
    const response = await timeService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/",async(req,res)=>{
    const {id, date, repetation} = req.body
    if(id&&date&&repetation){
        const response = await timeService.update(id, date, repetation)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.delete("/",async(req,res)=>{
    const {id} = req.body
    if(id){
        const response = await timeService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router