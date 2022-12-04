const express = require('express');
const router = express.Router();

const registerService = "../services/register"

router.post(async(req,res)=>{
    registerService.create(req,res)
})
router.get(async(req,res)=> {
    registerService.get(req,res)
})
router.put(async(req,res)=>{
    registerService.update(req,res)
})
router.delete(async(req,res)=>{
    registerService.delete(req,res)
})
module.exports = router