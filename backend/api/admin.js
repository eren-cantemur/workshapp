const express = require('express');
const router = express.Router();

const adminService = "../services/admin"

router.post(async(req,res)=>{
    adminService.create(req,res)
})
router.get(async(req,res)=> {
    adminService.get(req,res)
})
router.put(async(req,res)=>{
    adminService.update(req,res)
})
router.delete(async(req,res)=>{
    adminService.delete(req,res)
})
module.exports = router