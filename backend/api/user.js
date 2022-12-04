const express = require('express');
const router = express.Router();

const userService = "../services/user"

router.post(async(req,res)=>{
    userService.create(req,res)
})
router.get(async(req,res)=> {
    userService.get(req,res)
})
router.put(async(req,res)=>{
    userService.update(req,res)
})
router.delete(async(req,res)=>{
    userService.delete(req,res)
})
exports.router