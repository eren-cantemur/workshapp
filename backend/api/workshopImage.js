const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const workshopImageService = require("../services/workshopImage")

router.post("/", verifyRole("workshopImage", 1), async (req, res) => {
  const { workshopId } = req.body
  if (req.files.image && workshopId) {
    const uploadResponse = s3Service.upload(req.files.image)
    if (uploadResponse.type == "Error") {
      res.status(400).send(uploadResponse.message)
      return
    }
    else {
      const path = uploadResponse.data.location
      const response = await workshopImageService.create(path, workshopId)
      res.status(response.type === "Error" ? 400 : 200).send(response);
    }

  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:id", verifyRole("workshopImage", 2), async (req, res) => {
  const { id } = req.query
  if (id) {
    const response = await workshopImageService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:workshopId", verifyRole("workshopImage", 3), async (req, res) => {
  const { workshopId } = req.query
  if (workshopId) {
    const response = await workshopImageService.getByWorkshopId(workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole("workshopImage", 4), async (req, res) => {
  const response = await workshopImageService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})

router.delete("/", verifyRole("workshopImage", 5), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await workshopImageService.delete(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router