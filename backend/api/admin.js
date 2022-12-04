const express = require('express');
const router = express.Router();

const adminService = "../services/admin"


router.get("/:id",async(req,res)=> {
    adminService.getById(req,res)
})
router.get("/:name",async(req,res)=> {
    adminService.getByName(req,res)
})
router.get("/",async(req,res)=> {
    adminService.getAll(req,res)
})
router.put(async(req,res)=>{
    adminService.update(req,res)
})
router.delete(async(req,res)=>{
    adminService.delete(req,res)
})
module.exports = router