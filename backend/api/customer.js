const express = require('express');
const router = express.Router();

const customerService = "../services/customer"


router.get("/:id", async (req, res) => {
    customerService.getById(req, res)
})
router.get("/:name", async (req, res) => {
    customerService.getByName(req, res)
})
router.get("/", async (req, res) => {
    customerService.getAll(req, res)
})
router.put(async (req, res) => {
    customerService.update(req, res)
})
router.delete(async (req, res) => {
    customerService.delete(req, res)
})

module.exports = router