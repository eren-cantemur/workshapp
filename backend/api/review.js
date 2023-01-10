const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const reviewService = require("../services/review")

router.post("/", verifyRole("review", 1), async (req, res) => {
  const { comment, rate, workshopId } = req.body
  if (comment && rate  && workshopId) {
    const response = await reviewService.create(comment, rate, req.user.userId , workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/id/:id", verifyRole("review", 2), async (req, res) => {
  const id = req.params.id
  if (id) {
    const response = await reviewService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/workshopId/:workshopId", verifyRole("review", 3), async (req, res) => {
  const workshopId = req.params.workshopId
  if (workshopId) {
    const response = await reviewService.getByWorkshopId(workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/getByToken", verifyRole("review", 3), async (req, res) => {
  if (req.user) {
    const response = await reviewService.getByUserId(req.user.userId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole("review", 4), async (req, res) => {
  const response = await reviewService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("review", 5), async (req, res) => {
  const { id, comment, rate } = req.body
  if (id && comment && rate) {
    const response = await reviewService.update(id, comment, rate, req.user.userId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.put("/changeStatus", verifyRole("review", 7), async (req, res) => {
  const { id, isApproved} = req.body
  if (id && (isApproved == 1 || isApproved == 0)) {
    const response = await reviewService.changeStatus(id, isApproved)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole("review", 6), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await reviewService.delete(id, req.user.userId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router