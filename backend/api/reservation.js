const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const reservationService = require("../services/reservation")

router.post("/", verifyRole(req, res, next, "reservation", 1), async (req, res) => {
  const { userId, workshopId, date } = req.body
  if (date && userId && workshopId) {
    const response = await reservationService.create(date, userId, workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:id", verifyRole(req, res, next, "reservation", 2), async (req, res) => {
  const { id } = req.query
  if (id) {
    const response = await reservationService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:userId", verifyRole(req, res, next, "reservation", 3), async (req, res) => {
  const { userId } = req.query
  if (userId) {
    const response = await reservationService.getByUserId(userId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole(req, res, next, "reservation", 4), async (req, res) => {
  const response = await reservationService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole(req, res, next, "reservation", 5), async (req, res) => {
  const { id, date } = req.body
  if (id && date) {
    const response = await reservationService.update(id, date)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole(req, res, next, "reservation", 6), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await reservationService.delete(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router