const express = require('express');
const router = express.Router();

const reservationService = require("../services/reservation")

router.post("/",async(req,res)=>{
    const {userId, workshopId, date} = req.body
    if(date&&userId&&workshopId){
        const response = await reservationService.create(date,userId, workshopId)
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
        const response = await reservationService.getById(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/:userId",async(req,res)=> {
    const {userId} = req.query
    if(userId){
        const response = await reservationService.getByUserId(userId)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/",async(req,res)=> {
    const response = await reservationService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/",async(req,res)=>{
    const {id, date} = req.body
    if(id&&date){
        const response = await reservationService.update(id, date)
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
        const response = await reservationService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router