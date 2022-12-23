const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const timeService = require("../services/review")

router.post("/", verifyRole(req, res, next, "time", 1), async (req, res) => {
  const { date, repetation, workshopId } = req.body
  if (date && repetation && workshopId) {
    const response = await timeService.create(date, repetation, workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:id", verifyRole(req, res, next, "time", 2), async (req, res) => {
  const { id } = req.query
  if (id) {
    const response = await timeService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:workshopId", verifyRole(req, res, next, "time", 3), async (req, res) => {
  const { workshopId } = req.query
  if (workshopId) {
    const response = await timeService.getByWorkshopId(workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole(req, res, next, "time", 4), async (req, res) => {
  const response = await timeService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole(req, res, next, "time", 5), async (req, res) => {
  const { id, date, repetation } = req.body
  if (id && date && repetation) {
    const response = await timeService.update(id, date, repetation)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole(req, res, next, "time", 6), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await timeService.delete(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router