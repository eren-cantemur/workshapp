const express = require('express');
const router = express.Router();

const addressService = require("../services/address")


router.get("/:id", async (req,res)=>{
    const {id} = req.query
    if(id){
        const response = await addressService.getById(id)
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
        const response = await customerService.getByWorkshopId(workshopId)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
})

router.get("/",async(req,res)=> {
    const response = await addressService.getAll()
    res.status(response.type === "Error" ? 400 : 200).send(response);
})

router.put("/",async(req,res)=>{
    const {lat, long, country, city, county, postalCode, openAddress} = req.body
    if(lat&& long&& country&& city&&county&& postalCode&& openAddress){
        const response = await addressService.update(lat, long, country, city,county, postalCode, openAddress)
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
        const response = await addressService.delete(id)
        res.status(response.type === "Error" ? 400 : 200).send(response);
    } else {
      res.status(400).send({
        type: "Error",
        message: "Fields supplied not valid.",
      });
    }
    
})
module.exports = router