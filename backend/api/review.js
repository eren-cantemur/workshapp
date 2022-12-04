const express = require('express');
const router = express.Router();

const reviewService = "../services/review"

router.post(async(req,res)=>{
    reviewService.create(req,res)
})
router.get(async(req,res)=> {
    reviewService.get(req,res)
})
router.put(async(req,res)=>{
    reviewService.update(req,res)
})
router.delete(async(req,res)=>{
    reviewService.delete(req,res)
})
exports.router