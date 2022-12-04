const express = require('express');
const router = express.Router();

const workShopService = require("../services/workShop")

router.post(async (req, res) => {
    workShopService.create(req, res)
})
router.get(async (req, res) => {
    workShopService.get(req, res)
})
router.put(async (req, res) => {
    workShopService.update(req, res)
})
router.delete(async (req, res) => {
    workShopService.delete(req, res)
})
module.exports = router