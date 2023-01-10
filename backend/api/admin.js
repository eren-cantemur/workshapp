const express = require('express');
const router = express.Router();
const verifyRole = require('../middleware/roleVerif');

const adminService = require("../services/admin")


router.get("/id/:id", verifyRole("admin", 1), async(req,res)=> {
    const id = req.params.id
    if(id){
        const response = await adminService.getById(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/name/:name", verifyRole("admin", 1),async(req,res)=> {
    const name = req.params.name
    if(name){
        const response = await adminService.getByName(name)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.get("/", verifyRole("admin", 1),async(req,res)=> {
    const response = await adminService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("admin", 1),async(req,res)=>{
    const { name} = req.body
    if(name){
        const response = await adminService.update(req.user.userId,name)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})
router.delete("/", verifyRole("admin", 1),async(req,res)=>{
    const {userId} = req.user
    if(userId){
        const response = await adminService.delete(userId)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router