const express = require('express');
const router = express.Router();

const workShopManagerService = "../services/workShopManager"

router.post(async(req,res)=>{
    workShopManagerService.create(req,res)
})
router.get(async(req,res)=> {
    workShopManagerService.get(req,res)
})
router.put(async(req,res)=>{
    workShopManagerService.update(req,res)
})
router.delete(async(req,res)=>{
    workShopManagerService.delete(req,res)
})
exports.router