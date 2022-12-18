const express = require('express');
const router = express.Router();

const userService = require("../services/user")

router.get("/:id",async(req,res)=> {
    const {id} = req.query
    if(id){
        const response = await userService.getById(id)
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
        const response = await userService.getByName(name)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})

router.get("/",async(req,res)=> {
    const response = await userService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})

router.put("/",async(req,res)=>{
    const {id, email, password} = req.body
    if(id&&email&&password){
        const response = await userService.update(id, email, password)
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
        const response = await userService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }  
})
module.exports = router