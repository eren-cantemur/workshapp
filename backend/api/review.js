const express = require('express');
const router = express.Router();

const reviewService = require("../services/review")

router.post("/",async(req,res)=>{
    const {comment, rate,userId, workshopId} = req.body
    if(comment&&rate&&userId&&workshopId){
        const response = await reviewService.create(comment, rate, userId,workshopId)
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
        const response = await reviewService.getById(id)
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
        const response = await reviewService.getByUserId(userId)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/",async(req,res)=> {
    const response = await reviewService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/",async(req,res)=>{
    const {id, comment, rate} = req.body
    if(id&&comment&&rate){
        const response = await reviewService.update(id, comment, rate)
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
        const response = await reviewService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router