const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const reservationService = require("../services/reservation")

router.post("/", verifyRole("reservation", 1), async (req, res) => {
  const { userId, workshopId, date } = req.body
  if (date && userId && workshopId) {
    const response = await reservationService.create(date, req.user.id, workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:id", verifyRole("reservation", 2), async (req, res) => {
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
router.get("/:userId", verifyRole("reservation", 3), async (req, res) => {
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
router.get("/", verifyRole("reservation", 4), async (req, res) => {
  const response = await reservationService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("reservation", 5), async (req, res) => {
  const { id, date } = req.body
  if (id && date) {
    const response = await reservationService.update(id, date, req.user.id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole("reservation", 6), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await reservationService.delete(id, req.user.id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router