const express = require('express');
const router = express.Router();

const workShopImageService = "../services/workShopImage"

router.post(async(req,res)=>{
    workShopImageService.create(req,res)
})
router.get(async(req,res)=> {
    workShopImageService.get(req,res)
})
router.put(async(req,res)=>{
    workShopImageService.update(req,res)
})
router.delete(async(req,res)=>{
    workShopImageService.delete(req,res)
})
exports.router