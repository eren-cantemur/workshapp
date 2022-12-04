const express = require('express');
const router = express.Router();

const customerService = "../services/customer"

router.post(async(req,res)=>{
    customerService.create(req,res)
})
router.get(async(req,res)=> {
    customerService.get(req,res)
})
router.put(async(req,res)=>{
    customerService.update(req,res)
})
router.delete(async(req,res)=>{
    customerService.delete(req,res)
})
module.exports = router