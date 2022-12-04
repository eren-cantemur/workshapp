const express = require('express');
const router = express.Router();

const workShopManagerService = require("../services/workShopManager")

router.get("/:id", async (req, res) => {
    workShopManagerService.getById(req, res)
})
router.get("/:name", async (req, res) => {
    workShopManagerService.getByName(req, res)
})
router.get("/", async (req, res) => {
    workShopManagerService.getAll(req, res)
})
router.put(async (req, res) => {
    workShopManagerService.update(req, res)
})
router.delete(async (req, res) => {
    workShopManagerService.delete(req, res)
})

module.exports = router